import * as ws from "ws"
import Promise from "promise"
import { Message } from "./messages.js"

const PORT = 80
const WebSocketPort = 443

const Pending = {
}

const wss = new ws.WebSocketServer({port: WebSocketPort})

wss.on("connection", (ws) => {
    console.log("connected")

    ws.on("message", (data, isBinary) => {
        console.log("message sent: " + data.toString())

        wss.clients.forEach((client) => {
            if(client.readyState == ws.OPEN){
                console.log("sent to client")

                client.send(JSON.stringify(data.toString()))
            }
        })
    })
})