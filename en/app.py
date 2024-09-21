from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3

app = Flask(__name__, static_folder='.')
CORS(app)

# Datenbank initialisieren
def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            field1 TEXT,
            field2 TEXT,
            field3 TEXT
        )
    ''')
    conn.commit()
    conn.close()

# Route für das Servieren der HTML-Datei
@app.route('/')
def serve_html():
    return send_from_directory('.', 'test.html')

# Route für das Speichern und Abrufen der Daten
@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.get_json()
    field1 = data['field1']
    field2 = data['field2']
    field3 = data['field3']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Prüfen, ob die Daten bereits existieren
    cursor.execute('SELECT * FROM data WHERE field1 = ? AND field2 = ? AND field3 = ?', (field1, field2, field3))
    existing_entry = cursor.fetchone()

    if existing_entry:
        # Wenn die Daten existieren, sende diese zurück
        existing_data = f"Feld 1: {existing_entry[1]}, Feld 2: {existing_entry[2]}, Feld 3: {existing_entry[3]}"
        response = {
            'exists': True,
            'existingData': existing_data
        }
    else:
        # Wenn die Daten nicht existieren, speichere die neuen Daten
        cursor.execute('INSERT INTO data (field1, field2, field3) VALUES (?, ?, ?)', (field1, field2, field3))
        conn.commit()
        response = {
            'exists': False,
            'existingData': 'Daten erfolgreich gespeichert!'
        }

    conn.close()
    return jsonify(response)

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='37.114.53.8', port=5000)
