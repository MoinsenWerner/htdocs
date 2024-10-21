<?php
// Funktion zum Erstellen eines zufälligen Verzeichnisnamens mit 8 Zeichen (Buchstaben und Zahlen)
function generateRandomString($length = 8) {
    return substr(str_shuffle("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"), 0, $length);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Textfelder abfangen
    $text1 = $_POST['text1'];
    $text2 = $_POST['text2'];
    $text3 = $_POST['text3'];

    // Prüfen, ob Datei hochgeladen wurde
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        // Erstelle ein neues Verzeichnis mit einer zufälligen 8-stelligen Zeichenfolge
        $randomDir = 'uploads/' . generateRandomString();
        if (!is_dir($randomDir)) {
            mkdir($randomDir, 0777, true);
        }

        // Speichern der Textdaten in einer Datei, benannt nach "Minecraft Ingame Name" (Textfeld 2)
        $dataFile = $randomDir . '/' . $text2 . '.txt';
        $data = "Event Name: $text1\nMinecraft Ingame Name: $text2\nBeschreibung: $text3\n";
        file_put_contents($dataFile, $data);

        // Datei-Upload verarbeiten
        $targetFile = $randomDir . '/' . basename($_FILES["file"]["name"]);

        // Prüfen, ob die Datei tatsächlich eine ZIP-Datei ist
        $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        if ($fileType != 'jar') {
            echo "Es dürfen nur ZIP-Dateien hochgeladen werden.";
            exit;
        }

        // Datei hochladen
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "Die Datei " . basename($_FILES["file"]["name"]) . " wurde erfolgreich hochgeladen.";
        } else {
            echo "Fehler beim Hochladen der Datei.";
        }
    } else {
        echo "Keine Datei hochgeladen oder Fehler beim Hochladen.";
    }
}
?>
