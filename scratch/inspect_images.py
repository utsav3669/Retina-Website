import os
import sys

try:
    from PIL import Image
    print("PIL is available")
except ImportError:
    print("PIL is NOT available")
    sys.exit(0)

test_files = [
    "scratch/test_candidates/pmch_dsc.JPG",
    "scratch/test_candidates/pmch_dsc5893.JPG",
    "scratch/test_candidates/rcmch_flip1.png",
    "scratch/test_candidates/rcmch_flip2.png",
    "scratch/test_candidates/rcmch_flip4.png",
    "scratch/test_candidates/ustc_drone2.jpeg"
]

for f in test_files:
    if os.path.exists(f):
        im = Image.open(f)
        print(f"{f}: format={im.format}, size={im.size}, mode={im.mode}")
    else:
        print(f"{f}: NOT FOUND")

