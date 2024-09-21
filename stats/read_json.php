<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pfad zur JSON-Datei aus dem POST-Request entnehmen
    $filePath = $_POST['filePath'];

    // Überprüfen, ob die Datei existiert
    if (file_exists($filePath)) {
        // Inhalt der JSON-Datei lesen
        $jsonContent = file_get_contents($filePath);

        // JSON-Inhalt dekodieren
        $jsonData = json_decode($jsonContent, true);

        // JSON-Daten an den Client senden
        header('Content-Type: application/json');
        echo json_encode($jsonData);
    } else {
        // Fehler, wenn die Datei nicht gefunden wird
        http_response_code(404);
        echo json_encode(['error' => 'Datei nicht gefunden']);
    }
}
?>
