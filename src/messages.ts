export class Message { 
    public data : string;

    public author : number;

    public room : number;

    public date : number;

    constructor (tData : string, tAuthor : number, tRoom : number, tDate : number){
        this.data = tData
        this.author = tAuthor
        this.room = tRoom
        this.date = tDate
    }
}