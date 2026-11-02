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
    # Find images with alt or titles or surrounding context
    blocks = re.findall(r'<div[^>]*class=["\'][^"\']*portfolio[^"\']*["\'][^>]*>(.*?)</div>', html, re.DOTALL | re.I)
    print(f"Found {len(blocks)} portfolio blocks")
    for b in blocks[:15]:
        print("---")
        print(b.strip())

    items = re.findall(r'<a[^>]+href=["\']([^"\']+\.(?:jpg|jpeg|png))["\'][^>]*>(.*?)</a>', html, re.DOTALL | re.I)
    print(f"\nFound {len(items)} image link items:")
    for href, inner in items:
        clean_inner = re.sub(r'<[^>]+>', '', inner).strip()
        print(f"  {href} -> {clean_inner}")

