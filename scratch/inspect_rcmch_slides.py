import os
from PIL import Image

# Let's inspect average colors and corners to understand what flip1, flip2, flip4 show
for name in ["rcmch_flip1.png", "rcmch_flip2.png", "rcmch_flip4.png"]:
    p = os.path.join("scratch/test_candidates", name)
    im = Image.open(p)
    # crop center 500x300 and check
    print(f"{name}: format={im.format}, size={im.size}")

