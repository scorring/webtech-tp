const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

function sendToAll(wss, data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

// Websocket part
wss.on('connection', function connection(ws) {

    sendToAll(wss, "# New user connected");

    ws.on('message', function incoming(data) {
        sendToAll(wss, data);
    });
});