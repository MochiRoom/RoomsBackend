import * as express from 'express';
import * as fs from "fs"
import * as logger from "./logger.js"

const loaded = []

export function get(req : express.Request, res : express.Response){
    console.log(req.path)
    console.log(req.originalUrl)

    if(req.path == "/favicon.ico"){
        sendFile("images/logo.ico", req, res, true)
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




function sendFile( path : string, req : express.Request, res : express.Response, stayLoaded : boolean = true ){

    //checks if the path they are trying to send has already been loaded
    if(loaded[path] && stayLoaded){
        return loaded[path]
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