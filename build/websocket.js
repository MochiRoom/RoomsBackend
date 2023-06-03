import { Message } from "./messages.js";
import { Rooms, wss } from "./index.js";
export function connection(ws) {
    console.log("connected");
    //on message
    ws.on("message", (data, isBinary) => {
        var tMessage = JSON.parse(data.toString());
        Rooms.get(tMessage.room).messages.push(new Message(tMessage.data, tMessage.author, tMessage.room, tMessage.date));
        //sending the message to each client connected
        wss.clients.forEach((client) => {
            if (client.readyState == ws.OPEN) {
                var Send = JSON.stringify(Rooms.get(tMessage.room).messages[Rooms.get(tMessage.room).messages.length - 1]);
                console.log("sent to client: " + Send);
                client.send(Send);
            }
        });
    });
}
//# sourceMappingURL=websocket.js.map