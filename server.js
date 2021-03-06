const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const bridge = require('./routes/api/bridge');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/bridge', bridge);
app.use(express.static(__dirname + '/marketplace'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/marketplace/index.html");
})

app.get('/Home', (req, res) => {
    res.sendFile(__dirname + "/marketplace/Home.html");
})

app.get('/Shop', (req, res) => {
    res.sendFile(__dirname + "/marketplace/Shop.html");
})

app.get('/Inventory', (req, res) => {
    res.sendFile(__dirname + "/marketplace/Inventory.html");
})

app.get('/Marketplace', (req, res) => {
    res.sendFile(__dirname + "/marketplace/Marketplace.html");
})

app.use(express.static(__dirname + '/bridge'));

app.get('/Bridge', (req, res) => {
    res.sendFile(__dirname + "/bridge/index.html");
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/marketplace/404.html");
})


const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on port ${port}`));
