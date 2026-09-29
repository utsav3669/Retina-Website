import urllib.request
import os
from PIL import Image

candidates = {
    'form_optA': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=800&q=85',
    'form_optB': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=800&q=85',
    'nursing_optA': 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&h=800&q=85',
    'nursing_optB': 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&h=800&q=85',
    'counseling_optA': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=800&q=85',
    'counseling_optB': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Doctor_working_in_her_office_while_using_a_computer_and_taking_notes_during_a_consultation_with_a_patient.jpg/1200px-Doctor_working_in_her_office_while_using_a_computer_and_taking_notes_during_a_consultation_with_a_patient.jpg',
    'doctor_optA': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&h=800&q=85',
    'doctor_optB': 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&h=800&q=85',
    'campus_optA': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&h=800&q=85',
    'campus_optB': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Medical_Gossip.jpg/1200px-Medical_Gossip.jpg'
}

for name, url in candidates.items():
    p = f'scratch/{name}.jpg'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=12) as res:
            data = res.read()
            with open(p, 'wb') as f:
                f.write(data)
            with Image.open(p) as img:
                print(f"Downloaded {name}: {img.size} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")
