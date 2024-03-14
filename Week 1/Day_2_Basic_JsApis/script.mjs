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

const getSlice =(str,start,end)=>{
    console.log("Your Entered String is ",str);
    console.log(str.slice(start,end));
}
getSlice("hello world",0,6);