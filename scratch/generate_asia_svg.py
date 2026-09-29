import cv2
import numpy as np

img = cv2.imread('scratch/pure_map_lines.png', cv2.IMREAD_GRAYSCALE)
contours, hierarchy = cv2.findContours(img, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)

total_pts = 0
svg_paths = []

for c in contours:
    if len(c) < 8:
        continue
    # approxPolyDP: epsilon=0.55 gives smooth vector lines with exact shape fidelity
    approx = cv2.approxPolyDP(c, 0.55, closed=True)
    if len(approx) < 4:
        continue
    total_pts += len(approx)
    pts = approx.reshape(-1, 2)
    d = f'M {pts[0][0]} {pts[0][1]}' + ''.join([f' L {p[0]} {p[1]}' for p in pts[1:]]) + ' Z'
    svg_paths.append(d)

print(f'Total paths: {len(svg_paths)}, total points: {total_pts}')

# Save SVG
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1024 700" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#102A43" />
  <g fill="none" stroke="rgba(255, 255, 255, 0.35)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
'''
for p in svg_paths:
    svg_content += f'    <path d="{p}" />\n'
svg_content += '''  </g>
</svg>'''

with open('scratch/asia_map_clean.svg', 'w') as f:
    f.write(svg_content)

# Render to PNG for visual inspection
render = np.full((700, 1024, 3), (67, 42, 16), dtype=np.uint8) # BGR for #102A43
for c in contours:
    if len(c) < 8:
        continue
    approx = cv2.approxPolyDP(c, 0.55, closed=True)
    if len(approx) < 4:
        continue
    shifted = approx.copy()
    shifted[:, 0, 1] -= 160 # Shift Y by 160
    cv2.polylines(render, [shifted], isClosed=True, color=(255, 255, 255), thickness=1, lineType=cv2.LINE_AA)

cv2.imwrite('scratch/asia_map_clean_render.png', render)
print('Saved scratch/asia_map_clean.svg and scratch/asia_map_clean_render.png')
