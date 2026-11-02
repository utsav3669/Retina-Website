import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

req = urllib.request.Request("https://pmch-bd.org/", headers=headers)
try:
    with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"PMCH HTML length: {len(html)}")
        for m in re.finditer(r'uploads/gallery/media/[^"\']+', html):
            print("PMCH Gallery media:", m.group(0))
except Exception as e:
    print("Error:", e)

