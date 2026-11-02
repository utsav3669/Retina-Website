import urllib.request
import ssl
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

tests = {
    "bmc_photo4": "https://bmc-bd.edu.bd/assets/accounts/photo_4_1776940323.jpg",
    "gmc_building_orig": "https://greenlife.edu.bd/wp-content/uploads/2025/02/GMC-BUILDING-2.jpg",
    "gmc_building_scaled": "https://greenlife.edu.bd/wp-content/uploads/2025/02/GMC-BUILDING-2-scaled-960x300_c.jpg",
    "damcf_home03": "http://damcf.edu.bd/website/assets/img/home-03.jpg",
    "dcimc_college3": "https://dcimch.com/wp-content/themes/dcimch/image/college3.jpg",
    "enam_academic": "https://emcbd.info/images/logo/academicBuilding.jpg",
    "umc_carousel_main": "https://umcrcbd.com/img/carousel-main.jpg",
    "monno_academic": "https://upload.wikimedia.org/wikipedia/commons/4/40/Front_view_of_Monno_Medical_College_academic_builing_with_students_of_Dynamic_Monno-4_batch.jpg",
    "monno_hospital": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Monno_Medical_College_Hospital.jpg",
    "akmmc": "https://upload.wikimedia.org/wikipedia/commons/3/35/Anwer_Khan_Modern_Medical_College.jpg",
    "dnmc": "https://upload.wikimedia.org/wikipedia/commons/6/62/Dhaka_National_Medical_College_Hospital_002.JPG",
    "nemc": "https://upload.wikimedia.org/wikipedia/commons/d/d9/North_East_Medical_College_Campus.jpg"
}

WIKI_HEADERS = {
    'User-Agent': 'RetinaConsultancyResearch/1.0 (info@retinaconsultancy.com)'
}

for name, url in tests.items():
    print(f"Testing {name}: {url} ...", flush=True)
    try:
        h = WIKI_HEADERS if 'wikimedia' in url else headers
        req = urllib.request.Request(url, headers=h)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            data = resp.read()
            dest = f"scratch/test_candidates/{name}.jpg"
            with open(dest, "wb") as f:
                f.write(data)
            print(f"  SUCCESS! {name} ({len(data)/1024:.1f} KB)", flush=True)
    except Exception as e:
        print(f"  FAILED: {e}", flush=True)

