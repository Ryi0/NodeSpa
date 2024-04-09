import {FileHandler as fh} from "../../js/FileHandler.js";
import path from "node:path";
import {ServerResponse} from "node:http";
import {IncomingMessage} from "node:http";



function routeRequest(req, res){
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const filePath = path.join(__dirname, urlObj.pathname);
    if (fh.isImageRequest(urlObj.pathname)) {
        fh.sendImage(filePath, res);
    } else if (fh.isCssRequest(urlObj.pathname)) {
        fh.sendCss(filePath, res);
    } else {
        fh.sendHtml(filePath, res);
    }
}