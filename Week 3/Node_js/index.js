const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return res.end();
    }
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    const log = `${currentTime} : ${req.url} new request received\n`;
    
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/" :
                res.end("this is main page")
            break;
            case "/about" :
                res.end("this is about page")
            break;
            default :
                res.end("Page not found 404")
            break;
        }
    })
})

myServer.listen(3000,()=>{
    console.log("Server is running on port 3000")
})