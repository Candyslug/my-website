/*Candyslug, David*/

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

/*============*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
