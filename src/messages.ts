export class Message { 
    public data : string;

    public author : string;

    public room : number;

    public date : number;

    constructor (tData : string, tAuthor : string, tRoom : number, tDate : number){
        this.data = tData
        this.author = tAuthor
        this.room = tRoom
        this.date = tDate
    }
}