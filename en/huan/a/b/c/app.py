from flask import Flask, request, render_template, redirect, url_for
import os
import shutil

app = Flask(__name__)

# Verzeichnisse für das Speichern von HTML-Dateien und Bildern
HTML_DIR = '/news/'
IMAGE_DIR = '/storage/posts/'

# Zählschritt für Bilddateinamen
image_counter = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    global image_counter

    # Formulardaten abrufen
    title = request.form['title']
    author = request.form['author']
    filename = request.form['filename']
    content = request.form['content']

    # Bildverarbeitung
    image = request.files.get('image')
    image_filename = None
    if image:
        image_extension = os.path.splitext(image.filename)[1]
        image_filename = f"Blog{image_counter}{image_extension}"
        image_path = os.path.join(IMAGE_DIR, image_filename)
        image.save(image_path)
        image_counter += 1

    # HTML-Datei vorbereiten
    with open('Vblog.html', 'r') as template_file:
        template_content = template_file.read()

    # Platzhalter ersetzen
    html_content = template_content.replace('{{ title }}', title)\
                                  .replace('{{ author }}', author)\
                                  .replace('{{ content }}', content)
    if image_filename:
        html_content = html_content.replace('{{ image }}', f'<img src="{IMAGE_DIR}/{image_filename}" alt="Bild">')
    else:
        html_content = html_content.replace('{{ image }}', '')

    # Speichern der neuen HTML-Datei
    new_html_path = os.path.join(HTML_DIR, f"{filename}.html")
    with open(new_html_path, 'w') as new_html_file:
        new_html_file.write(html_content)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='37.114.53.8', port=5000, debug=True)
