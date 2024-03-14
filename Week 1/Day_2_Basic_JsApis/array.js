//push

function pushExaple(arr,elem){
    console.log("orignal array:",arr)
    arr.push(elem);
    console.log("After push :",arr)
}
pushExaple([6,5,3,7,8,9],800)

//pop
function popExample(arr){
    console.log("orignal array:",arr)
    arr.pop();
    console.log("After pop :",arr)
}

popExample([1,2,3,4,5,6])

//unshift

const  unshiftExample=(arr)=>{ 
        console.log("orignal array:",arr)
        arr.unshift(100);
        console.log("After unshift :",arr)
}

unshiftExample([4,5,4,5,6,7,5])

//shift

const  shiftExample=(arr)=>{ 
        console.log("orignal array:",arr)
        arr.shift();
        console.log("After shift :",arr)
}

shiftExample([5000,4000,3000,2000,1000])

//array concatination
function jodo(arr1,arr2){
    console.log("array1:",arr1)
    console.log("array1:",arr2)
    const result = arr1.concat(arr2)
    console.log('result of concatination is :',result)
}
jodo([600,700,800],[900,1000])

//----------------------------------------------------

const foreachExample = [10,20,30,40,50];

// for(i=0;i<foreachExample.length;i++){
//     console.log(foreachExample[i])
// }

foreachExample.forEach(function(elem){
    console.log(elem)
})

function log1(){
    console.log('hello from log1')
}
function log2(){
    console.log('hello from log2')
}
function logWhatPresents(fn){
    fn();
}

logWhatPresents(log1)

//forEach runs function iniside it for every elem of array

const arrex = [1,2,3];
function logThings(str){
    console.log(str + " is a string")
}
arrex.forEach(logThings)