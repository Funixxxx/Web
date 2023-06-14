
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const message = req.body.message;

    // Proses pesan menggunakan ChatGPT atau AI lainnya
    const reply = processMessage(message);

    res.json({ reply });
});

function processMessage(message) {
    // Proses pesan menggunakan ChatGPT atau AI lainnya
    // Contoh sederhana, balas dengan pesan yang sama
    return message;
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
