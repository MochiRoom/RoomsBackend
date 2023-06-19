import * as express from 'express';
import * as fs from "fs"
import * as logger from "./logger.js"

const loaded = []

export function get(req : express.Request, res : express.Response){
    logger.Logger("Get request made", ["From ip: " + req.ip, "to: " + req.path])

    if(req.path == "/saws"){
        sendFile("pages/secret.html", req, res, false)
    }
    else if(req.path == "/favicon.ico"){
        sendFile("images/favicon.ico", req, res, true)
        return
    }
    else if(req.path == "/web"){
        
        sendFile("pages/chat.html", req, res, false)
        return
    }
    else{
        res.write("<Script>window.location.replace(window.location.origin + '/web')</Script>")
        res.end()
        return
    }
}

export function started(){
    logger.Logger("Server started", [])
}




function sendFile( path : string, req : express.Request, res : express.Response, stayLoaded : boolean = true ) : void{

    //checks if the path they are trying to send has already been loaded
    if(loaded[path] && stayLoaded){
        res.write(loaded[path])
        res.end()
        return
    }

    // reads and sends a file
    fs.readFile(path, (err, data) =>{

        //if no error is encountered then sends the file and loads it 
        if(err === null){
            loaded[path] = data
            res.write(data)
            res.end()
            return  
        }

        else{
            logger.ErrorHappened(["An error accured while trying to read file", "the error happened when ip: " + req.ip, "Made " + req.method + " request to: " + req.path,"error: ", err])
            return
        }
    })
}