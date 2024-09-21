<?php
// Überprüfen, ob eine Datei hochgeladen wurde
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $imageTmpPath = $_FILES['image']['tmp_name'];
    $imageName = $_FILES['image']['name'];
    $imagePath = '/opt/lampp/htdocs/storage/posts/' . $imageName;

    // Bild speichern
    if (!move_uploaded_file($imageTmpPath, $imagePath)) {
        echo "Fehler beim Speichern des Bildes.";
        exit;
    }
} else {
    $imagePath = '';
}

// Der übermittelte HTML-Inhalt
$content = isset($_POST['fileContent']) ? $_POST['fileContent'] : '';

// Lese den Pfad aus dem URL-Parameter oder setze einen Standardwert
$targetDirectory = isset($_GET['target_directory']) ? $_GET['target_directory'] : '/opt/lampp/htdocs/news/';

// Überprüfe, ob das Verzeichnis existiert und beschreibbar ist
if (!is_dir($targetDirectory) || !is_writable($targetDirectory)) {
    echo "Das Verzeichnis '$targetDirectory' ist nicht vorhanden oder nicht beschreibbar.";
    exit;
}

// Vollständiger Pfad zur neuen Datei im Zielverzeichnis
$filename = isset($_POST['filename']) ? $_POST['filename'] : 'Vblog_neu';
$file = rtrim($targetDirectory, '/') . '/' . $filename . '.html';

// Versuche, die Datei zu erstellen
if (file_put_contents($file, $content)) {
    echo "Datei '$file' erfolgreich erstellt.";
} else {
    echo "Fehler beim Erstellen der Datei '$file'.";
}
?>
