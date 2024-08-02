const express = require('express');

const app = express();
const port = 8000;

app.get('/:message', (req, res) => {
    return res.send(req.params.message);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
