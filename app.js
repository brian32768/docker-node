var http = require('http')
var port = process.argv[2]

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World\n')
    console.log('%s Request for port %d', new Date(), port)
}).listen(port, '0.0.0.0')

console.log('Server running on port %d/', port)
