const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.cookie('user_ip', ip, { maxAge: 900000, httpOnly: true });
    res.send('IP-Adresse im Cookie gespeichert');
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
