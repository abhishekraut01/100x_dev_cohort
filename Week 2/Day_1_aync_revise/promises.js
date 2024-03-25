// //callback hell

// function makeReservationCallback(callback) {
//     setTimeout(function() {
//         console.log("Reservation confirmed");
//         callback();
//     }, 2000);
// }

// function buyIngredientsCallback(callback) {
//     setTimeout(function() {
//         console.log("Ingredients bought");
//         callback();
//     }, 1500);
// }

// function pickUpFlowersCallback(callback) {
//     setTimeout(function() {
//         console.log("Flowers picked up");
//         callback();
//     }, 1000);
// }

// // Callback hell: nested callbacks
// makeReservationCallback(function() {
//     buyIngredientsCallback(function() {
//         pickUpFlowersCallback(function() {
//             console.log("All tasks completed!");
//         });
//     });
// });


// // using promises 

// function delayPromise(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms)
//     });
// }

// function makeReservationPromise() {
//     return delayPromise(2000).then(() => console.log("Reservation confirmed"));
// }

// function buyIngredientsPromise() {
//     return delayPromise(1500).then(() => console.log("Ingredients bought"));
// }

// function pickUpFlowersPromise() {
//     return delayPromise(1000).then(() => console.log("Flowers picked up"));
// }

// // Using Promises
// makeReservationPromise()
//     .then(() => buyIngredientsPromise())
//     .then(() => pickUpFlowersPromise())
//     .then(() => console.log("All tasks completed!"))
//     .catch(error => console.error("An error occurred:", error));


// // using async/await

// async function delayAsync(ms) {
//     await new Promise(resolve => setTimeout(resolve, ms));
// }

// async function makeReservationAsync() {
//     await delayAsync(2000);
//     console.log("Reservation confirmed");
// }

// async function buyIngredientsAsync() {
//     await delayAsync(1500);
//     console.log("Ingredients bought");
// }

// async function pickUpFlowersAsync() {
//     await delayAsync(1000);
//     console.log("Flowers picked up");
// }

// // Using async/await
// async function mainAsync() {
//     try {
//         await makeReservationAsync();
//         await buyIngredientsAsync();
//         await pickUpFlowersAsync();
//         console.log("All tasks completed!");
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// mainAsync();
// function fn (resolve){
//     let a = 0;
//     for(let i = 0;i<100;i++){
//         a = a+i;
//     }
//     resolve(a)
// }
// const p = new Promise(fn)

// p.then((value)=>{
//     console.log(value)
// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class mypromise{
    
}
