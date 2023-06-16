const http = require('http');

const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    }
    if (req.url === '/about') {
        res.end('Here is a bit about us');
    } 
    res.end(`
    <h1>Oops!</h1> 
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">back home</a>
    `)
});

console.log('server started on port 5000')
server.listen(5000)
