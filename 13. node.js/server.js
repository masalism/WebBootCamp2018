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
const bodyParser = require('body-parser');


const app = express();

app.use(express.static(__dirname + '/public'))

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// MIDDLEWARE
// app.use((req, res, next) => {
//     console.log('<h1>Hellooo</h1>');
//     next();
// });

//GET request
// app.get('/:id', (req, res) => {
//     // console.log(req.query);
//     // req.body
//     // console.log(req.header);
//     console.log(req.params);
//     res.status(404).send("not found");
// });



app.listen(3000);