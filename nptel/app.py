from flask import Flask, request, render_template, jsonify
import os
from pdf_qr_extraction import extract_link_from_pdf_qr_code
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["UPLOAD_FOLDER"] = "uploads"
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)


@app.route("/")
def upload_form():
    return render_template("upload.html")


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"})
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"})
    if file and file.filename.endswith(".pdf"):
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
        file.save(file_path)
        qr_code_link = extract_link_from_pdf_qr_code(file_path, page_number=0)
        return jsonify({"link": qr_code_link})
    return jsonify({"error": "Invalid file type"})


if __name__ == "__main__":
    app.run(debug=True)
