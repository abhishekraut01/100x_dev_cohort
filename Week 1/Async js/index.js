// Asynchronous task 
// This is a simple example of an asynchronous task

// function findSum(n){
//     let sum = 0;
//     for(let i=0;i<n;i++){
//         sum +=i;
//     }
//     return sum;
// }

// const findSumTill100=()=>{
//     console.log(findSum(100))
// }

// setTimeout(findSumTill100,1000);
// console.log("Hello ji")

//this is aysnc task because even settimeout is before hello ji it still print at last because lt was wating to main thread get free


//we can also make this code synchronous

// function multiply(a,b){
//     return a*b;
// }

// const printMultiply=(x,y)=>{
//     let ans = multiply(x,y)
//     console.log(ans)
// }

// function syncSleep(){
//     let a = 0;
//     for(let i=0;i<10000000000;i++){
//         a++;
//     }
// } 
// syncSleep()
// console.log("kaise ho ji")
//_________________________________________________________

//filesystem module 
const fs = require('fs');
fs.readFile('a.txt','utf-8',function(err,data){
     console.log(data);
})
//this is asynchronous code that is reading data from the file system and log data with the help of utf-8 encoding 
//as this is async code this will go to side stack and will run after the sync code

console.log("hello ji 1"); 
let a =0;
for(let i=0;i<=1000000000;i++){
    a++
}

console.log("hello ji 2");

//http://latentflip.com/loupe/ :- this website can explain the arcitecture of javascript

//_________________________________________________________
//promises


