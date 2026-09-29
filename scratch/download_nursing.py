import urllib.request
from PIL import Image

nursing_urls = [
    ('nursing_1', 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('nursing_2', 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('nursing_3', 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('counseling_1', 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('counseling_2', 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('student_med', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&h=800&q=85')
]

for name, url in nursing_urls:
    p = f"scratch/{name}.jpg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as res:
            data = res.read()
            with open(p, 'wb') as f:
                f.write(data)
            with Image.open(p) as img:
                print(f"Downloaded {name}: {img.size}")
    except Exception as e:
        print(f"Error {name}: {e}")
