import os
from PIL import Image

f1 = "scratch/test_candidates/rcmch_flip1.png"
f4 = "scratch/test_candidates/rcmch_flip4.png"

im1 = Image.open(f1)
im4 = Image.open(f4)
print("im1 size:", im1.size)
print("im4 size:", im4.size)

# Let's save a smaller preview or check color distribution
box1 = im1.crop((0, 0, 500, 496))
box4 = im4.crop((0, 0, 500, 496))
print("Extracted boxes successfully")

