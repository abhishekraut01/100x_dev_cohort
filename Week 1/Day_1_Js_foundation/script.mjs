
// let firstname = 'abhishek';
// let lastname = 'Raut'
// let isMarried = false;

// if(isMarried == true){
//     console.log(firstname , 'is married')
// }else{
//     console.log(firstname + "is not married")
// }

// let ans = 0;
// for(let i=0;i<=100;i++){
//     ans = ans +i;
// }
// console.log(ans)

// 1. write a program to print all even numbers in an array



// arr.forEach(element => {
//     if(element %2 === 0){
//         console.log(element)
//     }
// });


// function findLargest(arr){
//     if(arr.length === 0){
//         throw new Error ('array is empy')
//     }

//     let largest = arr[0];
//     arr.forEach(element => {
//         if(element > largest){
//             largest = element
//         }
//     });
//     return largest;
// }

// let num = [1,2,3,4,5,6,7,44,23,65,34,78,84];
// let ans = findLargest(num);
// console.log(ans)

// ____________________________________________________
// how to take input in nodejs

// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Please enter a number: ', (userInput) => {
//   console.log(`You entered: ${userInput}`);
//   rl.close();
// });

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);
// rl.close();


//_________________________________________________________

let personsName = ['abhishek', 'nikhil', 'sakshi'];
let gender = ['male', 'male', 'female'];

for (let i = 0; i <= personsName.length; i++) {
  if (gender[i] == 'male') {
    console.log(personsName[i], 'is male')
  }
}

//we can optimise this code using objects in array

const allUsers = [{
  firstName: 'Abhishek',
  lastName: 'Raut',
  role: 'jrSDE',
},
{
  firstName: 'suresh',
  lastName: 'sharma',
  role: 'jrSDE'
},
{
  firstName: 'chinu',
  lastName: 'Raut',
  role: 'ips'
}]

for(let i=0;i<allUsers.length;i++){
  if(allUsers[i]['role']['lavda'] == 'jrSDE'){
    console.log(allUsers[i]['firstName'])
  }
}