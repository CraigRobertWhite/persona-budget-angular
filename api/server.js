const express = require('express');
const app = express();
const port = 3000;

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/hello', (request, response) => {
    response.send('Hello World!');
});

app.get('/budget', (request, response) => {
    response.json(require('./budget.json'));
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});