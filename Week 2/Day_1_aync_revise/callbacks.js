//callbacks 

// function square (n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function someOfSomething(a,b){
//     let square1 = cube(a);
//     let square2 = square(b)
//     return square1 + square2;
// }
// function sumOfCube(a,b){
//     let cube1 = cube(a)
//     let cube2 = cube(b);
//     return cube1 + cube2;
// }

// let ans = sumOfCube(1,2);
// console.log(ans);

// the problem in this code is DRY which is do not repeat yourself while code we can fix this using callbacks

// function square (n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function sumOfSomething(a,b,fn){
//     let ans = fn(a)
//     let ans2 = fn(b)
//     return ans + ans2;
// }

// let ans = sumOfSomething(1,2,square);
// console.log(ans);

//this is the optimised version of code using callbacks

