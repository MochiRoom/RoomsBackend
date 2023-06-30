import { error } from "console";
import { Message } from "./messages.js";

export class Room{
    public name : string

    public messages : Message[]

    public id : string

    constructor (tId : string){
        if(tId.length != 8){
            throw error
        }

        this.id = tId
        this.messages = []
    }
}