// import {sendHtml} from "./js/FileHandler";
// const sh = sendHtml();
// const http= require('http');
import http from "http";

import {sendHtml, sendImage} from "./js/FileHandler.js";

// const {sendHtml} = require("./js/FileHandler");
// sendHtml(require("./js/FileHandler"));


http.createServer(function (req, res) {
    // Serve the HTML file for the root path or "/index.html"
    if (req.url === "/" || req.url === "/index.html") {
        sendHtml("src/testaxasd.html", res);
    }

    else if (req.url === "/assets/img/brewingCoffee.png") {
        // Serve the image file when its path is requested
        sendImage("assets/img/brewingCoffee.png", res);
    } else {
        // Handle 404 Not Found for other paths
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
}).listen(8080); // The server listens on port 8080