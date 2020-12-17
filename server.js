const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('style'))
app.use(express.static('view'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(3000, () => console.log('It works!'));