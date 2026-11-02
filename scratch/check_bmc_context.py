import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {'User-Agent': 'Mozilla/5.0'}

req = urllib.request.Request("https://bmc-bd.edu.bd/gallery.html", headers=headers)
with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    for m in re.finditer(r'/assets/accounts/photo_[^"\']+', html):
        start = max(0, m.start() - 200)
        end = min(len(html), m.end() + 200)
        print("=== CONTEXT ===")
        print(html[start:end])
        print()

