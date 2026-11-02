import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

def inspect_site(name, url):
    print(f"\n==========================================")
    print(f"Checking {name}: {url}")
    print(f"==========================================")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for image tags with src
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
            # Filter likely banners, campus, building, sliders
            print(f"Found {len(imgs)} total images on {url}")
            for img in imgs:
                img_lower = img.lower()
                if any(k in img_lower for k in ['campus', 'building', 'college', 'hospital', 'banner', 'slider', 'slide', 'home', 'about', 'gallery', 'front', 'academic']):
                    print(f"  [TARGET] {img}")
                elif any(img_lower.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    print(f"  [IMG] {img}")
    except Exception as e:
        print(f"  FAILED: {e}")

sites = [
    ("Bangladesh Medical College", "https://bmc-bd.edu.bd/"),
    ("Green Life Medical College", "https://greenlife.edu.bd/"),
    ("Enam Medical College", "https://emcbd.info/"),
    ("Popular Medical College", "https://pmch-bd.org/"),
    ("Diabetic Association Medical College", "http://damcf.edu.bd/"),
    ("Dhaka Central International Medical College", "https://dcimch.com/"),
    ("Universal Medical College", "https://umcrcbd.com/"),
    ("Universal Medical College Hospital", "https://umchltd.com/"),
    ("Rangpur Community Medical College", "https://rcmch.com.bd/"),
    ("Rangpur Community Medical College 2", "https://rcmc.com.bd/"),
    ("USTC / IAHS", "https://ustc.ac.bd/faculty-of-medicine/")
]

for name, url in sites:
    inspect_site(name, url)

