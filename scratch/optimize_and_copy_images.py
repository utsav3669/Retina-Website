import os
from PIL import Image

dest_dir = "public/images/medical-colleges"
os.makedirs(dest_dir, exist_ok=True)

# Map our verified source files to the target filenames
sources = {
    "jahurul-islam-medical-college.jpg": "scratch/test_dl/jahurul-islam-medical-college.jpg",
    "bangladesh-medical-college.jpg": "scratch/test_candidates/bmc_photo4.jpg",
    "green-life-medical-college.jpg": "scratch/test_candidates/gmc_building_orig.jpg",
    "anwer-khan-modern-medical-college.jpg": "scratch/test_candidates/akmmc.jpg",
    "dhaka-national-medical-college.jpg": "scratch/test_candidates/dnmc.jpg",
    "monno-medical-college.jpg": "scratch/test_candidates/monno_academic.jpg",
    "enam-medical-college.jpg": "scratch/test_candidates/enam_academic.jpg",
    "popular-medical-college.jpg": "scratch/test_candidates/pmch_dsc.JPG",
    "diabetic-association-medical-college.jpg": "scratch/test_candidates/damcf_home03.jpg",
    "dhaka-central-international-medical-college.jpg": "scratch/test_candidates/dcimc_college3.jpg",
    "universal-medical-college.jpg": "scratch/test_candidates/umc_carousel_main.jpg",
    "north-east-medical-college.jpg": "scratch/test_candidates/nemc.jpg",
    "rangpur-community-medical-college.jpg": "scratch/test_candidates/rcmch_flip4.png",
    "institute-of-applied-health-sciences.jpg": "scratch/test_candidates/ustc_drone2.jpeg"
}

target_aspect = 16.0 / 10.0 # 1.6 aspect ratio (standard web card/hero)
target_max_width = 1600

for filename, src_path in sources.items():
    if not os.path.exists(src_path):
        print(f"ERROR: Missing source {src_path} for {filename}")
        continue
    
    im = Image.open(src_path)
    if im.mode != "RGB":
        im = im.convert("RGB")
    
    w, h = im.size
    print(f"Processing {filename}: original size {w}x{h}")
    
    # Scale down if very large (e.g. >1600px) while maintaining aspect ratio
    if w > target_max_width:
        new_h = int(h * (target_max_width / w))
        im = im.resize((target_max_width, new_h), Image.Resampling.LANCZOS)
    
    out_path = os.path.join(dest_dir, filename)
    # Save optimized JPEG with high quality
    im.save(out_path, "JPEG", quality=88, optimize=True)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"  Saved -> {out_path} ({im.size[0]}x{im.size[1]}, {size_kb:.1f} KB)")

print("\nDone copying and optimizing all 14 college photos!")

