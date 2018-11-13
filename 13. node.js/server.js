// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);
//     const user = {
//         name: 'John',
//         hoby: 'Skating' 
//     }
//     response.setHeader('Content-Tyoe', 'application/json');
//     response.end(JSON.stringify(user));
// });

// server.listen(3000);

const express = require('express');

const app = express();

//GET request
app.get('/', (req, res) => {
    res.send("getting root");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
});

app.listen(3000);