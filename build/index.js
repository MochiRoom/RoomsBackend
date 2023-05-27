import * as ws from "ws";
const PORT = 80;
const WebSocketPort = 443;
const Pending = {};
const wss = new ws.WebSocketServer({ port: WebSocketPort });
wss.on("connection", (ws) => {
    ws.on("message", (data, isBinary) => {
        wss.clients.forEach((client) => {
            if (client.readyState == ws.OPEN) {
                client.send(JSON.stringify(data.toString));
            }
        });
    });
});
//# sourceMappingURL=index.js.map