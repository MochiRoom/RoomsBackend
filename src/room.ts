import { Message } from "./messages.js";

export class Room{
    messages : Message[]

    id : number

    constructor (tId : number){
        this.id = tId
    }
}