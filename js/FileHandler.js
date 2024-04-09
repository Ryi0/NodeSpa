import fs from "fs";
import path from "node:path";
import * as url from "node:url";

// TODO : [MAKE SURE THE PATHS ARE VALID BEFORE QUERY.]
export function sendHtml(filePath, res) {
    fs.readFile(filePath, 'utf8', (e, htmlContent) => {
        if (e) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('such a bad, bad, file');
            return;
        }
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlContent);
        // res.end();
    });
}
export function sendImage(url, res){
    fs.readFile(url, (e, img)=>{
        if (e) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('such a bad, bad, file. No img');
            return;
        }
        // res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(img);
        res.end();
    })
}
export function sendCss(filePath, res) {
    fs.readFile(filePath, 'utf8', (e, htmlContent) => {
        if (e) {
            res.writeHead(500, {'Content-Type': 'text/css'});
            res.end('such a bad, bad, file');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(htmlContent);
        res.end();
    });
}

