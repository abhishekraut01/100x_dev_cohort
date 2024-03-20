//until now we've only used others people's async functions How can we create an async function of our own?

// ugly way 
// const fs = require('fs');
// function readFile(cb){
//     fs.readFile('a.txt','utf-8',function(err,data){
//         cb(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// readFile(onDone);

// better way with promises
// const fs = require('fs');
// function asyncFunction(){
//     var chitti =  new Promise(function(resolve,reject){
//         fs.readFile('a.txt','utf-8',function(err,data){
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     })
//     return chitti;
// }

// var ans = asyncFunction();
// ans.then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.error(err);
// })

// promises has three states pending resolve and reject

var d = new Promise(function(resolve){
 setTimeout(function(){
    resolve('hello');
 },1000)
});

function callback(){
    console.log(d);
}
console.log(d);
d.then(callback)

//promise is the thing you can use outside the function as well . it is just like any other class like send data from one place to another place
//what is promises :-> it is just a class that makes callbacks and asynchronous functions slightly more readable. whenever you create it you need to pass in a function as the first argument which has resolved as the first argument

//dummy async function that almost immediately resolves 
function dummyAsunc(){
    let result = new Promise(function(resolve,reject){
        resolve("hello i am resolved")
    })
    return result;
}

const value = dummyAsunc();
value.then(function(result){
    console.log(result);
})
