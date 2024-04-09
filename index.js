// import {sendHtml} from "./js/FileHandler";
// const sh = sendHtml();
// const http= require('http');
import http from "http";

import {sendHtml, sendImage} from "./js/FileHandler.js";

// const {sendHtml} = require("./js/FileHandler");
// sendHtml(require("./js/FileHandler"));





http.createServer(function (req, res) {
    // sendHtml("src/testaxasd.html", res)

    sendImage("assets/img/brewingCoffee.png", res);
    sendHtml("src/testaxasd.html", res);
    // res.write('Hello World!'); //write a response to the client
    // res.end(); //end the response

}).listen(8080); //the server object listens on port 8080

