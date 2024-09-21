const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000; // oder ein anderer Port deiner Wahl

// Set up multer for file handling
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../storage/posts'));
    },
    filename: function (req, file, cb) {
        cb(null, `Blog${req.counter || 0}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submissions
app.post('/generate', upload.single('image'), (req, res) => {
    const { title, author, filename, body } = req.body;
    const imageFile = req.file;
    
    if (!title || !author || !filename || !body) {
        return res.status(400).json({ success: false, error: 'Alle Felder sind erforderlich' });
    }

    // Load the template and replace placeholders
    const templatePath = path.join(__dirname, 'Vblog.html');
    fs.readFile(templatePath, 'utf8', (err, template) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Fehler beim Laden der Vorlage' });
        }
        
        let fileContent = template
            .replace('<!-- TITLE -->', `<h1>${title}</h1>`)
            .replace('<!-- AUTHOR -->', `<p>Autor: ${author}</p>`)
            .replace('<!-- BODY -->', `<p>${body}</p>`);
        
        if (imageFile) {
            const imagePath = path.join('storage/posts', imageFile.filename);
            fileContent = fileContent.replace('!-- IMAGE --', `<img src="../storage/posts/${imageFile.filename}" alt="Bild">`);
        } else {
            fileContent = fileContent.replace('!-- IMAGE --', '');
        }

        // Save the new HTML file
        const htmlPath = path.join(__dirname, '../../news', `${filename}.html`);
        fs.writeFile(htmlPath, fileContent, (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: 'Fehler beim Speichern der HTML-Datei' });
            }
            res.json({ success: true, htmlPath: htmlPath });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server läuft auf http://37.114.53.8:${port}`);
});
