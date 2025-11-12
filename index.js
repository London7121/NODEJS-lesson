const http = require('http');

const server = http.createServer((req, res) => {

    // req -> serverga so'rov
    // res -> server javobi


    console.log(req.url)
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('<h1>Hello, World!</h1>');
    res.end();

});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});