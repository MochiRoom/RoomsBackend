import * as ws from "ws";
import { Room } from "./room.js";
const WebSocketPort = 443;
const Rooms = new Map();
Rooms.set(0, new Room(0));
const wss = new ws.WebSocketServer({ port: WebSocketPort });
//websocket
wss.on("connection", (ws) => {
    console.log("connected");
    //on message
    ws.on("message", (data, isBinary) => {
        var tMessage = JSON.parse(data.toString());
        console.log(tMessage);
        //sending the message to each client connected
        wss.clients.forEach((client) => {
            if (client.readyState == ws.OPEN) {
                console.log("sent to client");
                client.send(JSON.stringify(data.toString()));
            }
        });
    });
});
//# sourceMappingURL=index.js.map