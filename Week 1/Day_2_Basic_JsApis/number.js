function explainParseInt(value){
    console.log("orignal Value was :",value);
    let result = parseInt(value);
    console.log("After ParseInt",result)
}
explainParseInt("42")
explainParseInt("42px")
explainParseInt("2.4")
console.log('   ')
function explainParseFloat(value){
    console.log("orignal Value was :",value);
    let result = parseFloat(value);
    console.log("After ParseFloat",result)
}
explainParseFloat("42")
explainParseFloat("dd42px")
explainParseFloat("2.4")