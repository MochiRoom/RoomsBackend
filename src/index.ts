import * as ws from "ws"
import Promise from "promise"
import { Message } from "./messages.js"
import { json } from "stream/consumers"
import { Room } from "./room.js"

const WebSocketPort = 443

const Rooms = new Map<number, Room>()
Rooms.set(0, new Room(0))

const wss = new ws.WebSocketServer({port: WebSocketPort})

//websocket
wss.on("connection", (ws) => {
    console.log("connected")

    //on message
    ws.on("message", (data, isBinary) => {

        var tMessage : Message = JSON.parse(data.toString())

        Rooms.get(tMessage.room).messages.push(new Message(tMessage.data, tMessage.author, tMessage.room, tMessage.date))


        //sending the message to each client connected
        wss.clients.forEach((client) => {

            if(client.readyState == ws.OPEN){
                console.log("sent to client")



                client.send(JSON.stringify(Rooms.get(tMessage.room).messages[Rooms.get(tMessage.room).messages.length - 1 ]))
            }

        })
    })

})