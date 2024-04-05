const express = require('express');

function calculateSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

const app = express();

app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString()); // Convert the result to a string before sending
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
