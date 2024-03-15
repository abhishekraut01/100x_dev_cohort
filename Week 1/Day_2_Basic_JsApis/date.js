const currentDate =  new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());


console.log("time in milliseconds since 1970:",currentDate.getTime())

function calculateSum(){
    let a = 0;
    for(let i=0;i<10000000000;i++){
        a=a+i
    }
    return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = beforeDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);