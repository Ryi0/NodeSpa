import http from 'node:http';
import {routeRequest} from "./js/router.js";
const server = http.createServer(routeRequest);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});