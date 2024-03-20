// function demoAsync(){
//     let result = new Promise(function(res,rej){
//         setTimeout(() => {
//           res("I am in set timeout")
//         }, 1000);
//     })
//     return result;
// }

// function main(){
//     demoAsync().then(function(value){
//         console.log(value);
//     });
// }
// main();

//Let's make this function more clean

function demoAsync(){
    let result = new Promise(function(res){
        setTimeout(() => {
          res("I am in set timeout")
        }, 1000);
    })
    return result;
}

async function main(){
    let value = await demoAsync();
    console.log(value);
    console.log("after timeout")
}
main();
console.log("after main")