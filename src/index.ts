import * as ws from "ws"
import Promise from "promise"
import { Message } from "./messages.js"

const PORT = 80
const WebSocketPort = 443

const Pending = {
}

const wss = new ws.WebSocketServer({port: WebSocketPort})

wss.on("connection", (ws) => {
    ws.on("message", (data, isBinary) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify(data))
            }
        })
    })
})