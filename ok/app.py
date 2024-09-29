from flask import Flask, request, render_template, jsonify

app = Flask(__name__)
file_path = "data.txt"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save', methods=['POST'])
def save():
    text = request.form['text']
    with open(file_path, 'a') as file:
        file.write(text + '\n')
    return jsonify({"status": "success"})

@app.route('/read', methods=['GET'])
def read():
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        return jsonify({"content": content})
    except FileNotFoundError:
        return jsonify({"content": ""})

@app.route('/delete', methods=['POST'])
def delete():
    with open(file_path, 'w'):
        pass  # Leere Datei erstellen
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(host='37.114.53.8', port=5000, debug=True)

