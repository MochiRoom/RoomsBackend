import { user } from "./user.js";

export class Message { 
    public data : string;

    public author : user;

    public room : number;

    public date : number;

    constructor (tData : string, tAuthor : user, tRoom : number, tDate : number){
        this.data = tData
        this.author = tAuthor
        this.room = tRoom
        this.date = tDate
    }
}