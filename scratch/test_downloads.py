import urllib.request
import ssl
import json
import os

ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# Let's inspect test downloads for verified images
test_urls = {
    "jahurul-islam-medical-college": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Jahurul_Islam_Medical_College_Hospital_by_ROY_10.jpg",
    "anwer-khan-modern-medical-college": "https://upload.wikimedia.org/wikipedia/commons/3/35/Anwer_Khan_Modern_Medical_College.jpg",
    "dhaka-national-medical-college": "https://upload.wikimedia.org/wikipedia/commons/6/62/Dhaka_National_Medical_College_Hospital_002.JPG",
    "monno-medical-college": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Monno_Medical_College_Hospital.jpg",
    "enam-medical-college": "https://emcbd.info/images/logo/academicBuilding.jpg",
    "diabetic-association-medical-college": "http://damcf.edu.bd/website/assets/img/home-03.jpg",
    "dhaka-central-international-medical-college": "https://dcimch.com/wp-content/themes/dcimch/image/college3.jpg",
    "universal-medical-college": "https://umcrcbd.com/img/carousel-main.jpg",
    "north-east-medical-college": "https://upload.wikimedia.org/wikipedia/commons/d/d9/North_East_Medical_College_Campus.jpg"
}

os.makedirs("scratch/test_dl", exist_ok=True)

for name, url in test_urls.items():
    print(f"Testing {name}: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            content = resp.read()
            size_kb = len(content) / 1024
            ext = ".jpg" if "jpg" in url.lower() or "jpeg" in url.lower() else ".png"
            dest = f"scratch/test_dl/{name}{ext}"
            with open(dest, "wb") as f:
                f.write(content)
            print(f"  SUCCESS! Saved {dest} ({size_kb:.1f} KB)")
    except Exception as e:
        print(f"  FAILED: {e}")
