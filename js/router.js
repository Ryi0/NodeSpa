// js/router.js
import path from 'node:path';
import {sendHtml, sendCss, sendJs, sendImage} from './FileHandler.js';
import {fileURLToPath} from 'url';

// Convert the URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);

// Use the file path to get the directory name
const __dirname = path.dirname(__filename);

export function routeRequest(req, res) {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const pathname = urlObj.pathname;

    switch (pathname) {
        case '/':
            sendHtml(path.join(__dirname, '..', 'assets', 'content', 'index.html'), res);
            break;
        case '/impact':
            sendHtml(path.join(__dirname, '..', 'assets', 'content', 'impact.html'), res);
            break;
        case '/fabrication':
            sendHtml(path.join(__dirname, '..', 'assets', 'content', 'fabrication.html'), res);
            break;
        case '/solution':
            sendHtml(path.join(__dirname, '..', 'assets', 'content', 'solution.html'), res);
            break;
        case '/utilisation':
            sendHtml(path.join(__dirname, '..', 'assets', 'content', 'utilisation.html'), res);
            break;
        case '/js':
            sendJs(path.join(__dirname, '..', 'assets', 'content', 'menu.js'), res);
            break;
        default:
            if (pathname.startsWith('/css/')) {
                const filePath = path.join(__dirname, '..', 'css', pathname.slice(5));
                sendCss(filePath, res);
            } else if (pathname.startsWith('/img/')) {
                const filePath = path.join(__dirname, '..', 'assets', 'img', pathname.slice(5));
                sendImage(filePath, res);
            } else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('File not found');
            }
    }
}
