from pyzbar.pyzbar import decode
from PIL import Image
import pdfplumber

def extract_qr_code_from_pdf(pdf_path, page_number, output_image_path):
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[page_number]
        im = page.to_image(resolution=300)  # Convert the page to an image
        im.save(output_image_path)

def decode_qr_code(image_path):
    with open(image_path, 'rb') as image_file:
        image = Image.open(image_file)
        decoded_objects = decode(image)
        if decoded_objects:
            return decoded_objects[0].data.decode('utf-8')
        else:
            return None

def extract_link_from_pdf_qr_code(pdf_path, page_number):
    output_image_path = 'qr_code_image.png'
    extract_qr_code_from_pdf(pdf_path, page_number, output_image_path)
    qr_code_data = decode_qr_code(output_image_path)
    print("Decoded QR Code Data:", qr_code_data)  # Add this line for debugging
    return qr_code_data
