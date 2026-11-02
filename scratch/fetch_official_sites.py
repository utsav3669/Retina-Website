import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

urls = [
    ("bangladesh-medical-college", "https://bmc-bd.edu.bd/"),
    ("green-life-medical-college", "https://greenlife.edu.bd/"),
    ("popular-medical-college", "https://pmch-bd.org/"),
    ("diabetic-association-medical-college", "http://damcf.org/"),
    ("diabetic-association-medical-college-2", "http://damcf.edu.bd/"),
    ("dhaka-central-international-medical-college", "https://dcimch.com/"),
    ("universal-medical-college", "https://umchltd.com/"),
    ("universal-medical-college-2", "https://umcrcbd.com/"),
    ("rangpur-community-medical-college", "https://rcmc.com.bd/"),
    ("institute-of-applied-health-sciences", "https://ustc.ac.bd/")
]

for name, url in urls:
    print(f"\n--- Fetching {name} ({url}) ---", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=5) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
            print(f"Found {len(imgs)} images:", flush=True)
            for img in imgs[:8]:
                print(f"  {img}", flush=True)
    except Exception as e:
        print(f"  Error: {e}", flush=True)
