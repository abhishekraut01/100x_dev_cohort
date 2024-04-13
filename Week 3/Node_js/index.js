const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        return res.end();
    }
    const log = ` ${Date.now()} : ${req.url} : ${req.method} request Recieved\n`;
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile("log.txt",log,(err)=>{
        switch(myUrl.pathname){
            case "/" :
                res.end("this is main page");
            break;
            case "/about" :
                const username = myUrl.query.myname;
                const age = myUrl.query.age;
                res.end(`hello ${username} your age is ${age}`);
            break;
            case "/search" :
                const userSearch = myUrl.query.search_query;
                res.end(`here are your results for ${userSearch}`);
            break;
            default :
                res.end("error 404 page not found");
        }
    })
})

myServer.listen(3000,()=>{
    console.log("Server is running on port 3000")
});