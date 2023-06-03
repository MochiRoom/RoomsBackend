import * as ws from "ws"
import { Message } from "./messages.js"
import { Room } from "./room.js"
import { connection } from './websocket.js';
import  express  from "express";
import { get } from "./requests.js";

// PORTS the server uses
const WebSocketPort = 443
const Port = 80

// initiates the servers
const app = express()
const wss = new ws.WebSocketServer({port: WebSocketPort})

const Rooms = new Map<number, Room>()
Rooms.set(0, new Room(0))



//websocket
wss.on("connection", connection)

//express server
app.get("*", get)

export {Rooms, wss}