import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
}

req = urllib.request.Request("https://pmch-bd.org/", headers=headers)
with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    for m in re.finditer(r'DSCF\d+', html):
        start = max(0, m.start() - 250)
        end = min(len(html), m.end() + 250)
        print("=== CONTEXT FOR", m.group(0), "===")
        print(html[start:end])
        print()

