const currentDate =  new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());


console.log("time in milliseconds since 1970:",currentDate.getTime())

function calculateSum(n){
    let a = 0;
    for(let i = 0; i < n; i++){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(1000000000);
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime(); 
console.log(afterTimeInMs - beforeTimeInMs);