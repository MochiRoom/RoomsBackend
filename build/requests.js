import * as fs from "fs";
import * as logger from "./logger.js";
const loaded = [];
export function get(req, res) {
}
function sendFile(path, req, res, stayLoaded = true) {
    //checks if the path they are trying to send has already been loaded
    if (loaded[path] && stayLoaded) {
        return loaded[path];
    }
    // reads and sends a file
    fs.readFile(path, (err, data) => {
        //if no error is encountered then sends the file and loads it 
        if (err === null) {
            loaded[path] = data;
            res.write(data);
            res.end();
            return;
        }
        else {
            logger.ErrorHappened(["An error accured while trying to read file", "the error happened when ip: " + req.ip, "Made " + req.method + " request to: " + req.path, "error: ", err]);
            return;
        }
    });
}
//# sourceMappingURL=requests.js.map