const http = require('http');

const port = 3026;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Servidor funcionando correctamente');
    res.end(); 
});