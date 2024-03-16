const findSum = (n) => {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}
let ans = findSum(100);
console.log(ans);
let ans2 = findSum(1000);
console.log(ans2);
const beforeTime = new Date().getTime();
let ans3 = findSum(10000000);
console.log(ans3);
const AfterTime = new Date().getTime();
console.log("Time Required to execute function is :", Math.floor((AfterTime - beforeTime) * .001), 'seconds');

//pattern questions in loops 
function drawPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let pattern = ''
        for (let j = 0; j <= i; j++) {
            pattern += '*'
        }
        console.log(pattern);
    }
}

drawPattern(5);
console.log(" ")
//print pyramid pattern
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        // Add spaces before printing asterisks
        for (let j = rows; j > i; j--) {
            str += ' ';
        }
        // Print asterisks
        for (let k = 1; k <= (2 * i) - 1; k++) {
            str += '*';
        }
        console.log(str);
    }
}

// Example: Print a pyramid pattern with 5 rows
printPyramid(5);
