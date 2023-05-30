import { Message } from "./messages.js";

export class Room{
    public messages : Message[]

    public id : number

    constructor (tId : number){
        this.id = tId
        this.messages = []
    }
}