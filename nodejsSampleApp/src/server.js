'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

let isCurrentlyHealthy = true;
let isCurrentlyReady = true;

// App
const app = express();
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => {
    res.send('Hello Deepanshu Agrawal !!! </br></br> Hostname: ' + hostname);
});

app.get('/health', (req, res) => {
    if (isCurrentlyHealthy) {
        res.send('Health check passed');
        return;
    }
    
    res.status(500).send('Health check did not pass');
});

app.get('/readiness', (req, res) => {
    if (isCurrentlyReady) {
        res.send('Readiness check passed');
        return;
    }
    
    res.status(500).send('Readiness check did not pass');
});

app.post('/ready/sick', (req, res) => {
    req.params.dictionary
    isCurrentlyReady = false;
    res.send('Readiness check is now sick');
});

app.post('/health/sick', (req, res) => {
    isCurrentlyHealthy = false;
    res.send('Heath check is now sick');
});

app.post('/ready/recover', (req, res) => {
    isCurrentlyHealthy = true;
    res.send('Readiness check is now ready');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);