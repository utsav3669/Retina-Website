import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def inspect(title, url):
    print(f"\n=== {title} ({url}) ===", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Find all images
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
            print(f"Total images: {len(imgs)}", flush=True)
            for img in imgs[:15]:
                print(f"  {img}", flush=True)
    except Exception as e:
        print(f"Error: {e}", flush=True)

inspect("Popular Gallery", "https://pmch-bd.org/gallery")
inspect("Popular Main", "https://pmch-bd.org/")
inspect("RCMCH Main", "https://rcmch.com.bd/")
inspect("BMC Gallery HTML", "https://bmc-bd.edu.bd/gallery.html")
inspect("BMC Hospital Overview", "https://bmc-bd.edu.bd/hospital-overview")

