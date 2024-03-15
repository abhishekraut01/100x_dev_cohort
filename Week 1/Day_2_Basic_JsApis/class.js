// class Animal{
//     constructor(name,legCount){
//         this.name =name;
//         this.legCount = legCount;
//     }
//     describe(){
//         return `${this.name} has ${this.legCount} legs `
//     }
// }

// const dog = {
//     name: 'doggie',
//     legcount: 4,
//     speaks: 'bhow bhow'
// }
// const cat = {
//     name: 'cat',
//     legcount: 4,
//     speaks: 'meow meow'
// }

// console.log(`animal ${dog['name']} has ${dog['legcount']} legs`)

// console.log(`animal ${cat['name']} has ${cat['legcount']} legs`)

//we are writing repeated console lines here so lets wrapped up it into a function


// const dog = {
//     name: 'doggie',
//     legcount: 4,
//     speaks: 'bhow bhow'
// }
// const cat = {
//     name: 'cat',
//     legcount: 4,
//     speaks: 'meow meow'
// }

// function printStr(animal){
//     console.log(`animal ${animal['name']} has ${animal['legcount']} legs`)
// }

// printStr(dog)
// printStr(cat)

//we knew that every animals has same properties like name legs and speaks so what we can do that we can make class of the animal and make contructer inside it which creates objects which has this properties and we can make objects whenever we want to create obj of animal

class Animal{
    constructor(name,legcount,speaks){
        this.name = name;
        this.legcount =legcount;
        this.speaks = speaks;
    }
    static myType(){
        console.log('hii i am only associate with class not with any object you can call me without creating object li Animal.myType() ')
    }
    speak(){
        console.log(`${this.name} says ${this.speaks}`)
    }
}

let Dog = new Animal("Dog",4,"Bark");
Dog.speak();

// Animal.speak() //this will not work because you need to create object to access this function

Animal.myType()
