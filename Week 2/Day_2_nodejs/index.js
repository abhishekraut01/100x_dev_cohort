function doSomething(){
    let p = new Promise (function(res,rej){
        res("hello i am form res");
    })
    return p
}

doSomething().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message)
});