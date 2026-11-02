import os
from PIL import Image

for name in ["rcmch_flip1.png", "rcmch_flip2.png", "rcmch_flip4.png", "rcmch_f2.jpg", "rcmch_f4.jpg"]:
    p = os.path.join("scratch/test_candidates", name)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{name}: size={im.size}, mode={im.mode}")

