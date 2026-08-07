from PIL import Image
import math

src_path = r"C:\Users\Cristiano\.gemini\antigravity\brain\1566f0d4-4048-4430-830b-3a9481d84340\.user_uploaded\media_1786095894313.jpg"
out_path = r"C:\Users\Cristiano\.gemini\antigravity\scratch\igreja-site\public\images\logo\logo-graca-e-poder.png"

img = Image.open(src_path).convert("RGBA")
w, h = img.size

# Precise crop coordinates for logo (symbol + text)
left = int(w * 0.465)
top = int(h * 0.67)
right = int(w * 0.71)
bottom = int(h * 0.77)

crop = img.crop((left, top, right, bottom))
crop_w, crop_h = crop.size

# Create RGBA image with transparent background
transparent_logo = Image.new("RGBA", (crop_w, crop_h), (0, 0, 0, 0))

pixels = crop.load()
out_pixels = transparent_logo.load()

for y in range(crop_h):
    for x in range(crop_w):
        r, g, b, a = pixels[x, y]
        
        # Check if pixel belongs to red GP symbol
        is_red_symbol = (r > 130) and (r > g + 40) and (r > b + 40)
        
        # Check if pixel belongs to white text
        is_white_text = (r > 175) and (g > 175) and (b > 175)
        
        # Check if pixel is transition / anti-aliased edge around text or symbol
        is_edge = False
        if not is_red_symbol and not is_white_text:
            # Check brightness and green-blue balance
            brightness = (r + g + b) / 3.0
            if brightness > 140 and abs(r - g) < 40 and abs(r - b) < 40:
                is_edge = True

        if is_red_symbol or is_white_text:
            out_pixels[x, y] = (r, g, b, 255)
        elif is_edge:
            alpha_val = int(min(255, max(50, (r + g + b) / 3 * 0.8)))
            out_pixels[x, y] = (r, g, b, alpha_val)
        else:
            out_pixels[x, y] = (0, 0, 0, 0)

# Save transparent PNG
transparent_logo.save(out_path, "PNG")
print("Transparent logo created and saved to:", out_path)
