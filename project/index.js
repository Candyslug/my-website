/*Candyslug, David*/

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded());


app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

/*============*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/search', (req, res) => {
    //console.log(req.body["searchterm"]);
    if (req.body["searchterm"] == "admin"){
        //res.end('herllo wrold');
        res.send('Hi there. :)');
        //res.write('helloww');
    }
    else{
        res.sendStatus('404');
    }
});