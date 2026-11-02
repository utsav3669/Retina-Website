import os
from PIL import Image

f1 = "scratch/test_candidates/pmch_dsc.JPG"
f2 = "scratch/test_candidates/pmch_dsc5893.JPG"

im1 = Image.open(f1)
im2 = Image.open(f2)
print("im1 size:", im1.size, "format:", im1.format)
print("im2 size:", im2.size, "format:", im2.format)

# Check EXIF
exif1 = im1.getexif()
print("EXIF 1 tags:", {k: exif1.get(k) for k in exif1 if k < 400})

