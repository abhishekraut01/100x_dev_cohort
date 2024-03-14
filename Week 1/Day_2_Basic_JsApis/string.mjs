// Lets Learn The String 

function getStringLength(str){
    console.log("Orignal String:",str);
    console.log("Length:",str.length);
}
getStringLength("hello Bhai");

function findIndexOf(str,target){
    console.log("Your Entered String is ",str);
    console.log(console.log(str.indexOf(target)));
}
findIndexOf("abhishek Raut",'Raut');
findIndexOf("abhishek Raut Raut",'Raut'); //getting first index
function findlastIndexOf(str,target){
    console.log("Your Entered String is ",str);
    console.log(console.log(str.lastIndexOf(target)));
}
findlastIndexOf("Abhishek Raut Raut Raut",'Raut'); 
findlastIndexOf("Abhishek Raut Raut Raut",'raut'); //getting -1 because it is case sensitive

//_________________________________________________________

const getSlice =(str,start,end)=>{
    console.log("Your Entered String is ",str);
    console.log(str.slice(start,end));
}
getSlice("hello world",0,6);

function cutIt(str,startIndex,endIndex){
    let newStr = '';
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<endIndex){
            newStr = newStr + str[i]
        }
    }
    return newStr;
}

let ans = cutIt('Abhishek',0,4);
console.log(ans);

//_________________________________________________________

let name = 'Abhishek Raut';
console.log(name.replace("Abhishek","Chinu"))

//Split
let para = 'Hi my name is Abhi';
console.log(para.split(" "))

const val = '      abhi  dev  ';
console.log(val.trim())


//toUppper

let dev = "abhiShek";
console.log(dev.toLowerCase())
console.log(dev.toUpperCase())