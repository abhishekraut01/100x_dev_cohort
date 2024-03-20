let loop = true;
setTimeout(()=>{ loop = false},1000)
while(loop){}
console.log("Freed from Loop")