import express from "express";
import { WebSocketServer } from "ws";
const PORT = 80;
const WebSocketPort = 443;
const app = express();
const SocketServer = new WebSocketServer({ port: WebSocketPort });
const loaded = {};
app.get("*", (req, res) => {
});
app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});
function SendFile(req, res) {
}
//# sourceMappingURL=index.js.map