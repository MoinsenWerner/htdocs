<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file_path = $_POST["file_path"];

    // Überprüfen, ob die Datei existiert
    if (!file_exists($file_path)) {
        echo "Datei '$file_path' wurde nicht gefunden.";
        exit;
    }

    // Überprüfen, ob es eine .nbt- oder .dat-Datei ist
    $file_extension = pathinfo($file_path, PATHINFO_EXTENSION);
    if ($file_extension != "nbt" && $file_extension != "dat") {
        echo "Ungültiges Dateiformat. Bitte eine .nbt- oder .dat-Datei angeben.";
        exit;
    }

    // Python-Skript aufrufen, um die Datei zu entschlüsseln
    $command = escapeshellcmd("python3 decode_nbt.py " . escapeshellarg($file_path));
    $output = shell_exec($command);

    // Ausgabe formatieren
    if ($output) {
        echo "<h2>Ergebnis der entschlüsselten Datei:</h2>";
        echo "<pre>$output</pre>";
    } else {
        echo "Es gab ein Problem beim Entschlüsseln der Datei.";
    }
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBT/DAT Datei Entschlüsseln</title>
</head>
<body>
    <h1>NBT oder DAT Datei Entschlüsseln</h1>
    <form method="POST">
        <label for="file_path">Pfad zur NBT- oder DAT-Datei:</label>
        <input type="text" id="file_path" name="file_path" placeholder="/pfad/zur/datei.nbt oder /pfad/zur/datei.dat" required>
        <button type="submit">Oke</button>
    </form>
</body>
</html>
