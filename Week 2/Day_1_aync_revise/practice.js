//amazon Interview Question

// const sum = function(a){
//     return function (b){
//         if(b === undefined) return a;
//         else return sum(a + b);
//     };
// };
// console.log(sum(10)(20)(30)(40) ())

// this question is based on currying concept in js

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
const sum1 = sum(1);
console.log(sum1)
const sum2  = sum1(2);
console.log(sum2)
const result  = sum2(3);
console.log(result)

const add = (a) => (b) => (c) => (d) => a+b+c+d;
const results = add(2)(2)(2)(2)
console.log(results)