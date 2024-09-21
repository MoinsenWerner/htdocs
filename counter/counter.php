<?php
session_start();

$counterFile = 'visitor_count.txt';

// Wenn die Datei nicht existiert, initialisiere den Zähler auf 0
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, '0');
}

// Lese den aktuellen Zählerstand aus der Datei
$visitorCount = (int)file_get_contents($counterFile);

// Überprüfe, ob der Benutzer eine neue Sitzung hat
if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;
    $visitorCount++; // Erhöhe den Zähler
    file_put_contents($counterFile, $visitorCount); // Speichere den neuen Zählerstand
}

// Rückgabe als JSON
echo json_encode(['visitorCount' => $visitorCount]);
?>
