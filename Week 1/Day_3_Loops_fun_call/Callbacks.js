//we can call one function in another function

// function square(n){
//     return n*n
// }
// function cube(n){
//     return n*n*n
// }

// function sumOfSquare(a,b){
//     const val1 = square(a);
//     const val2 = square(b);
//     return val1+val2;
// }
// function sumOfCube(a,b){
//     const val1 = cube(a);
//     const val2 = cube(b);
//     return val1+val2;
// }

// console.log(sumOfCube(2,2))

//in this code we are repeating code wich is not good practice and it voilate the DRY practice lets use callback function 

function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}


function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}

console.log(sumOfSomething(2,2,cube))
console.log(sumOfSomething(2,2,square))