import express  from "express"
import { WebSocket, WebSocketServer } from "ws"
import * as fs from "fs"
import Promise from "promise"

const PORT = 80
const WebSocketPort = 443

const app = express()
const SocketServer = new WebSocketServer({port: WebSocketPort})

const loaded = {}

app.get("*", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT)
})


function SendFile(req : express.Request, res : express.Response){

}
