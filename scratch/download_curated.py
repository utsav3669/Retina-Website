import urllib.request
import os
from PIL import Image

photo_ids = [
    ('form_fillup', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('form_typing', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('nursing_ward', 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('nursing_nurse', 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('counseling_desk', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('counseling_dr', 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('doctor_portrait', 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('doctor_female', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('doctor_stethoscope', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('campus_brick', 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&h=800&q=85'),
    ('campus_students', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=800&q=85')
]

for name, url in photo_ids:
    p = f"scratch/{name}.jpg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=10) as res:
            data = res.read()
            with open(p, 'wb') as f:
                f.write(data)
            with Image.open(p) as img:
                print(f"Downloaded {name}: {img.size} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")
