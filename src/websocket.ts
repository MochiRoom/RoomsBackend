import * as websocket from "ws"
import { Message } from "./messages.js"
import { Rooms, wss } from "./index.js"
import { Room } from "./room.js"
import * as logger from "./logger.js"

export function connection(ws : websocket.WebSocket){
    logger.Logger("Someone connected to the websocket")
    
    //on message
    ws.on("message", (data, isBinary) => {
        
        var tMessage : Message = JSON.parse(data.toString())
        
        if (!Rooms.has(tMessage.room.id)){
            Rooms.set(tMessage.room.id, new Room(tMessage.room.id, tMessage.room.name))
        }
        else{
            
            
            Rooms.get(tMessage.room.id).messages.push(new Message(tMessage.data, tMessage.author, tMessage.room, tMessage.date))
            
            let t = 0
            
            //sending the message to each client connected
            wss.clients.forEach((client) => {
                
                if(client.readyState == ws.OPEN){
                    
                    t++
                    
                    var Send = JSON.stringify(Rooms.get(tMessage.room.id).messages[Rooms.get(tMessage.room.id).messages.length - 1 ])
                    
                    client.send(Send)
                }
                
            })
            
            logger.Logger("Message Receveice", ["The message was: " + tMessage.data, "From user: " + tMessage.author.name + " " + tMessage.author.id, "And was sent out to: " + t + " amount of clients"])
        }
    })
}