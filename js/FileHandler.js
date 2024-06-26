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

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlContent);
        res.end();
    });
}
export function sendJs(filePath, res) {
    const resolvedPath = path.resolve(filePath);
    fs.readFile(resolvedPath, (err, jsContent) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('JavaScript file not found');
            } else {
                // Some other error
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading JavaScript file');
            }
            return;
        }
        // Successfully read the file, send it with the JavaScript content type
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(jsContent);
    });
}
export function sendImage(url, res){
    fs.readFile(url, (e, img)=>{
        if (e) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('such a bad, bad, file. No img');
            return;
        }
        res.writeHead(200, {'Content-Type': 'image/png'});
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

export function isImageRequest(url){
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.endsWith('.png') || parsedUrl.pathname.endsWith('.jpg') || parsedUrl.pathname.endsWith('.jpeg') || parsedUrl.pathname.endsWith('.gif');
}

export function isCssRequest(url){
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.endsWith('.css');
}




















export const FileHandler = {
    sendHtml: sendHtml,
    sendImage: sendImage,
    sendCss: sendCss,
    isImageRequest: isImageRequest,
    isCssRequest: isCssRequest
}