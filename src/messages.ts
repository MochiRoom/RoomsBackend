import { error } from "console";
import { user } from "./user.js";

export class Message { 
    public data : string;

    public author : user;

    public room : string;

    public date : number;

    constructor (tData : string, tAuthor : user, tRoom : string, tDate : number){
        if(tRoom.length != 8){
            throw error
        }

        this.data = tData
        this.author = tAuthor
        this.room = tRoom
        this.date = tDate
    }
}