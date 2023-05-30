export class Message { 
    data : string;

    author : string;

    room : number;

    date : number;

    constructor (tData : string, tAuthor : string, tRoom : number, tDate : number){
        this.data = tData
        this.author = tAuthor
        this.room = tRoom
        this.date = tDate
    }
}