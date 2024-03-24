// let fs = require('fs');

// fs.readFile('a.text', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("The data Read from the file is :")
//         console.log(data);
//     }
// })


// we can call async function inside aysnc function like inside set timeout there is another setTimeout 

console.log("hi")

setTimeout(function(){

    console.log("first setTimeout");

    setTimeout(function(){
        console.log("another setTimeout")
    },5000)

},2000)

let a = 0;
for(let i=0;i<10;i++){
    a = a+i;
}

console.log("done")

//how the code will be executed here :- The code will run the sync code and async code will be send to web apis and executed there for 2 sec then the first SetTimeout code will reached callback Queue and will pushed when Thread is idle 
//after the first SetTimeout get executed it will call the setTimeout which is inside first setTimeout fun and process is same 
