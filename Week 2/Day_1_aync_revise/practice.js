// //amazon Interview Question

// // const sum = function(a){
// //     return function (b){
// //         if(b === undefined) return a;
// //         else return sum(a + b);
// //     };
// // };
// // console.log(sum(10)(20)(30)(40) ())

// // this question is based on currying concept in js

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// const sum1 = sum(1);
// console.log(sum1)
// const sum2  = sum1(2);
// console.log(sum2)
// const result  = sum2(3);
// console.log(result)

// const add = (a) => (b) => (c) => (d) => a+b+c+d;
// const results = add(2)(2)(2)(2)
// console.log(results)

// callback vs promise

// function myOwnAsyncFunction(callback,delay){
//     setTimeout(callback,delay);
// }

// myOwnAsyncFunction(function(){
//     console.log('done')
// },2000)


// lets make this code as promisified version

// function promisifiedMyOwnAsyncFunction(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve()
//         },duration);
//     })
//     return p;
// }

// const ans = promisifiedMyOwnAsyncFunction(1000);
// ans.then(function(){
//     console.log('done hai ji')
// })

// let n = new Promise(function(resolve){
//     resolve();
// })

// ********************* type cconversion ****************

// console.log('1'+1+2) 
// console.log(1+1+'2') 
// console.log(1+'1'+2) 
// console.log('1'+1+'2') 
// console.log(+true) 
// console.log(typeof(+""))
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(1 < '2')
// console.log(1 < '02')

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null === 0)

console.log( undefined == 0)