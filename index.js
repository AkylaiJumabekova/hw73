const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'password';

app.get('/:message', (req, res) => {
    return res.send(req.params.message);
});

app.get('/encode/:text', (req, res) => {
    const encodedText = Vigenere.Cipher(password).crypt(req.params.text);
    return res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const decodedText = Vigenere.Decipher(password).crypt(req.params.text);
    return res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
