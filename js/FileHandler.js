import fs from "fs";

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

export function sendCss(filePath, res) {
    fs.readFile(filePath, 'utf8', (e, htmlContent) => {
        if (e) {
            res.writeHead(500, {'Content-Type': 'text/css'});
            res.end('such a bad, bad, file');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlContent);
        res.end();
    });
}