// what is object 

const  users = '{"name": "abhishek" , "age": "21","gender":"male"}'

// JSON.parse
// JSON.stringify
// console.log(users['name'])

const user = JSON.parse(users);
console.log(user.age)

//in this code first we create a object in the form of string note that you should give colons to key also . then with the help of JSON.parse(object in the from of str) we convert it into object


const person = {
    name: 'suresh',
    gender: 'male',
    age: 21
};

console.log(person.name); // Output: suresh
console.log(person['name']); // Output: suresh

const finalString = JSON.stringify(person);
console.log(finalString);
