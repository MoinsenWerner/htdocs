<?php
// Pfad zur JSON-Datei mit Spielernamen und UUIDs
$playersFile = '/opt/lampp/htdocs/stats/players.json'; // Ändere diesen Pfad zu deiner tatsächlichen JSON-Datei

// Überprüfen, ob die Datei existiert
if (file_exists($playersFile)) {
    // Inhalt der JSON-Datei lesen
    $playersContent = file_get_contents($playersFile);

    // JSON-Inhalt dekodieren
    $playersData = json_decode($playersContent, true);

    // JSON-Daten an den Client senden
    header('Content-Type: application/json');
    echo json_encode($playersData);
} else {
    // Fehler, wenn die Datei nicht gefunden wird
    http_response_code(404);
    echo json_encode(['error' => 'Datei mit Spielerinformationen nicht gefunden']);
}
?>
