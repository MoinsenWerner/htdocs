<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verzeichnisse für das Speichern von HTML-Dateien und Bildern
    $htmlDir = '../../../../news/';
    $imageDir = '../storage/posts/';
    $templateFile = 'Vblog.html';

    // Zählschritt für Bilddateinamen
    $imageCounterFile = 'image_counter.txt';
    $imageCounter = file_exists($imageCounterFile) ? (int)file_get_contents($imageCounterFile) : 0;

    // Formulardaten abrufen
    $title = htmlspecialchars($_POST['title']);
    $author = htmlspecialchars($_POST['author']);
    $filename = htmlspecialchars($_POST['filename']);
    $content = htmlspecialchars($_POST['content']);

    // Bildverarbeitung
    $imageFilename = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $imageExtension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $imageFilename = "Blog{$imageCounter}.{$imageExtension}";
        $imagePath = $imageDir . $imageFilename;
        move_uploaded_file($_FILES['image']['tmp_name'], $imagePath);
        $imageCounter++;
        file_put_contents($imageCounterFile, $imageCounter);
    }

    // HTML-Datei vorbereiten
    $templateContent = file_get_contents($templateFile);
    $htmlContent = str_replace(
        ['{{ title }}', '{{ author }}', '{{ content }}', '{{ image }}'],
        [$title, $author, $content, $imageFilename ? '<img src="' . $imageDir . $imageFilename . '" alt="Bild">' : ''],
        $templateContent
    );

    // Speichern der neuen HTML-Datei
    $newHtmlPath = $htmlDir . $filename . '.html';
    file_put_contents($newHtmlPath, $htmlContent);

    // Weiterleitung zurück zur Formseite
    header('Location: index.php');
    exit;
} else {
    // Wenn der Zugriff nicht über POST erfolgt
    header('HTTP/1.0 405 Method Not Allowed');
    echo 'Method Not Allowed';
}
?>
