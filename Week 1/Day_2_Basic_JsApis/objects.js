function objectMethods(obj){
    console.log("orignal Object :",obj);

    let keys = Object.keys(obj);
    console.log('After Object.keys(): ',keys)

    let values = Object.values(obj);
    console.log("After Object.values():",values)
    
    let entries = Object.entries(obj);
    console.log("After Object.entries():",entries)

    let hasProperties = obj.hasOwnProperty("property");
    console.log("after hasOwnProperty():",hasProperties)
    //hasproperty checks wheather the object has some properties like name or something else present in that or not.

}

const obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

objectMethods(obj);

//lets see how to merge two objects
const obj1 = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

let newObj = Object.assign({},obj1,{newProperty:"myValue" });
console.log(newObj)