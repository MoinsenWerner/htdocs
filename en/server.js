const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('data.db');

app.use(cors());
app.use(bodyParser.json());

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        field1 TEXT NOT NULL,
        field2 TEXT NOT NULL,
        field3 TEXT NOT NULL,
        UNIQUE(field1, field2, field3)
    )`);
});

app.post('/submit', (req, res) => {
    const { field1, field2, field3 } = req.body;

    if (!field1 || !field2 || !field3) {
        return res.status(400).json({ message: 'Fehlende Felder' });
    }

    const query = `INSERT INTO data (field1, field2, field3) VALUES (?, ?, ?)`;
    const checkQuery = `SELECT * FROM data WHERE field1 = ? AND field2 = ? AND field3 = ?`;

    db.get(checkQuery, [field1, field2, field3], (err, row) => {
        if (row) {
            return res.status(409).json({ message: 'Diese Datenkombination existiert bereits!' });
        } else {
            db.run(query, [field1, field2, field3], (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Fehler beim Speichern der Daten' });
                }
                res.status(200).json({ message: 'Daten erfolgreich gespeichert!' });
            });
        }
    });
});

app.listen(5000, () => {
    console.log('Server läuft auf Port 5000');
});
