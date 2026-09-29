import cv2
import numpy as np

img = cv2.imread('scratch/clean_map_lines.png', cv2.IMREAD_GRAYSCALE)
contours, _ = cv2.findContours(img, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)

total_pts = 0
svg_paths = []

for c in contours:
    if len(c) < 10:
        continue
    # approxPolyDP: epsilon=0.6 preserves every intricate coastline bend while eliminating raster staircase
    approx = cv2.approxPolyDP(c, 0.6, closed=True)
    if len(approx) < 4:
        continue
    total_pts += len(approx)
    
    pts = approx.reshape(-1, 2)
    d = f'M {pts[0][0]} {pts[0][1]}' + ''.join([f' L {p[0]} {p[1]}' for p in pts[1:]]) + ' Z'
    svg_paths.append(d)

print(f'Total valid contours: {len(svg_paths)}, total points: {total_pts}')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1024 700" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#102A43" />
  <g fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
'''
for p in svg_paths:
    svg_content += f'    <path d="{p}" />\n'
svg_content += '''  </g>
</svg>'''

with open('scratch/asia_map_traced.svg', 'w') as f:
    f.write(svg_content)

print('Saved scratch/asia_map_traced.svg')
