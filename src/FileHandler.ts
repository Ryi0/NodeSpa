import {IncomingMessage, ServerResponse} from "node:http";
import module from "node:module";
const http = require('http');
const reader = new FileReader();

http.createServer(function (req:IncomingMessage, res: ServerResponse extends { new(...args: any): infer R } ? R : any & {
    req: InstanceType<typeof IncomingMessage>
}) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('Hello World!');
    // res.end();
    loadHTML('testaxasd.html', res);
}).listen(8080);


function sendHtml(File:any, res:ServerResponse){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(File);
        res.end();
}
async function loadHTML(filePath:string, res:ServerResponse) {
    const response = await fetch(filePath);
    const htmlContent = await response.text();
    // Now you can pass htmlContent to any function that needs it
    sendHtml(htmlContent, res);
}


