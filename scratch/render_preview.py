import cv2
import numpy as np
import re

# Read ASIA_MAP_PATH from src/data/asiaMapPaths.js
with open('src/data/asiaMapPaths.js', 'r', encoding='utf-8') as f:
    text = f.read()

path_str = text.split('"')[1]
subpaths = [p.strip() for p in path_str.split('M ') if p.strip()]

# Create 1200x500 dark navy canvas matching CTA section
canvas = np.zeros((500, 1200, 3), dtype=np.uint8)
canvas[:] = (67, 42, 16) # #102A43 in BGR: B=0x43=67, G=0x2A=42, R=0x10=16

# Draw subtle radial glow in center
center_x, center_y = 600, 250
y_coords, x_coords = np.ogrid[:500, :1200]
dist_sq = (x_coords - center_x)**2 / (600**2) + (y_coords - center_y)**2 / (250**2)
glow_mask = np.clip(1.0 - dist_sq, 0, 1) ** 2
canvas[:, :, 0] = np.clip(canvas[:, :, 0] + glow_mask * 45, 0, 255).astype(np.uint8)
canvas[:, :, 1] = np.clip(canvas[:, :, 1] + glow_mask * 20, 0, 255).astype(np.uint8)
canvas[:, :, 2] = np.clip(canvas[:, :, 2] + glow_mask * 8, 0, 255).astype(np.uint8)

# Transform viewBox 0 160 1024 680 to canvas 1200x500 with xMidYMid slice
scale = 1200.0 / 1024.0
offset_x = 0
offset_y = 160.0
dy = (500.0 - 680.0 * scale) / 2.0

def svg_to_screen(x, y):
    sx = int(round((x - 0) * scale))
    sy = int(round((y - offset_y) * scale + dy))
    return sx, sy

# Draw all subpaths
line_color = (120, 105, 95) # subtle white-ish outline
for sp in subpaths:
    clean = sp.replace('Z', '').strip()
    pts = []
    tokens = clean.replace('L', ' ').split()
    nums = [float(t) for t in tokens if t]
    for i in range(0, len(nums), 2):
        sx, sy = svg_to_screen(nums[i], nums[i+1])
        pts.append([sx, sy])
    if len(pts) > 1:
        cv2.polylines(canvas, [np.array(pts, dtype=np.int32)], isClosed=True, color=line_color, thickness=1, lineType=cv2.LINE_AA)

# Draw routes and points
routes = [
    ('Bangladesh', (492, 492), (544, 528)),
    ('India', (492, 492), (450, 565)),
    ('China', (492, 492), (740, 390)),
    ('Philippines', (492, 492), (805, 620)),
]

for name, (ox, oy), (dx, dy_pt) in routes:
    sox, soy = svg_to_screen(ox, oy)
    sdx, sdy = svg_to_screen(dx, dy_pt)
    mid_x = (sox + sdx) // 2
    mid_y = min(soy, sdy) - 25
    curve_pts = []
    for t in np.linspace(0, 1, 40):
        bx = int((1-t)**2 * sox + 2*(1-t)*t * mid_x + t**2 * sdx)
        by = int((1-t)**2 * soy + 2*(1-t)*t * mid_y + t**2 * sdy)
        curve_pts.append([bx, by])
    cv2.polylines(canvas, [np.array(curve_pts, dtype=np.int32)], isClosed=False, color=(160, 140, 120), thickness=1, lineType=cv2.LINE_AA)
    cv2.circle(canvas, (sdx, sdy), 4, (255, 255, 255), -1, lineType=cv2.LINE_AA)
    cv2.circle(canvas, (sdx, sdy), 7, (200, 180, 160), 1, lineType=cv2.LINE_AA)

# Origin Nepal circle (Retina Orange #FF914D -> B=77, G=145, R=255)
nox, noy = svg_to_screen(492, 492)
cv2.circle(canvas, (nox, noy), 5, (77, 145, 255), -1, lineType=cv2.LINE_AA)
cv2.circle(canvas, (nox, noy), 10, (77, 145, 255), 1, lineType=cv2.LINE_AA)

cv2.imwrite('scratch/cta_section_asia_map_preview.png', canvas)
print('Successfully saved preview: scratch/cta_section_asia_map_preview.png')
