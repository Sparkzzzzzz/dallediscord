var http = require('http');

http.createServer(function (req: any, res: { write: (arg0: string) => void; end: () => void; }) {
    res.write("Im Alive!");
    res.end();
}).listen(8080);