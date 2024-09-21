document.addEventListener('DOMContentLoaded', function() {
    fetch('list_players.php')
        .then(response => response.json())
        .then(data => populateDropdown(data))
        .catch(error => console.error('Error fetching player list:', error));
});

document.getElementById('jsonForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const playerSelect = document.getElementById('playerSelect');
    const selectedUUID = playerSelect.value;

    if (selectedUUID) {
        fetch('read_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `filePath=${encodeURIComponent(selectedUUID + '.json')}`
        })
        .then(response => response.json())
        .then(data => displayStats(data))
        .catch(error => {
            console.error('Error:', error);
            alert("Fehler beim Lesen der Datei.");
        });
    } else {
        alert("Bitte einen Spieler auswählen.");
    }
});

function populateDropdown(players) {
    const playerSelect = document.getElementById('playerSelect');

    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.uuid;
        option.textContent = player.name;
        playerSelect.appendChild(option);
    });
}

function displayStats(data) {
    const output = document.getElementById('output');
    output.innerHTML = '';  // Reset the output

    const stats = data.stats || data;  // Adjust depending on JSON structure

    for (const [key, value] of Object.entries(stats)) {
        const statDiv = document.createElement('div');
        statDiv.classList.add('stat');

        const keyElement = document.createElement('span');
        keyElement.classList.add('stat-key');
        keyElement.textContent = `${key}: `;

        const valueElement = document.createElement('span');
        valueElement.classList.add('stat-value');
        valueElement.textContent = JSON.stringify(value, null, 2);

        statDiv.appendChild(keyElement);
        statDiv.appendChild(valueElement);
        output.appendChild(statDiv);
    }
}
