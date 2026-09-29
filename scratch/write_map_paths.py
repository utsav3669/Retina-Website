import cv2
import numpy as np

img = cv2.imread('scratch/pure_map_lines.png', cv2.IMREAD_GRAYSCALE)
contours, _ = cv2.findContours(img, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)

paths = []
for c in contours:
    if len(c) < 8:
        continue
    approx = cv2.approxPolyDP(c, 0.55, closed=True)
    if len(approx) < 4:
        continue
    pts = approx.reshape(-1, 2)
    d = f'M {pts[0][0]} {pts[0][1]}' + ''.join([f' L {p[0]} {p[1]}' for p in pts[1:]]) + ' Z'
    paths.append(d)

combined = ' '.join(paths)

with open('src/data/asiaMapPaths.js', 'w', encoding='utf-8') as f:
    f.write('// Traced 1:1 from the user-provided official Asia map reference image\n')
    f.write(f'export const ASIA_MAP_PATH = "{combined}";\n')

print(f'Wrote src/data/asiaMapPaths.js with {len(paths)} paths and {len(combined)} chars')
