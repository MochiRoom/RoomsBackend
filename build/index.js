import express from "express";
import { WebSocketServer } from "ws";
import * as fs from "fs";
const PORT = 80;
const WebSocketPort = 443;
const app = express();
const SocketServer = new WebSocketServer({ port: WebSocketPort });
const loaded = {};
app.get("*", (req, res) => {
    SendFile(req, res);
});
app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});
async function SendFile(req, res) {
    const data = await fs.promises.readFile("pages/chat.html");
    console.log(data);
}
//# sourceMappingURL=index.js.map