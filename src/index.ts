import * as ws from "ws"
import Promise from "promise"
import { Message } from "./messages.js"
import { json } from "stream/consumers"

const PORT = 80
const WebSocketPort = 443

const Pending = {
}

const wss = new ws.WebSocketServer({port: WebSocketPort})

//websocket
wss.on("connection", (ws) => {
    console.log("connected")

    //on message

    ws.on("message", (data, isBinary) => {
        console.log("message sent: " + data.toString())

        wss.clients.forEach((client) => {
            if(client.readyState == ws.OPEN){
                console.log("sent to client")
                var send = new Message()
                send.contents = data.toString()

                client.send(JSON.stringify(send))
            }
        })
    })

})