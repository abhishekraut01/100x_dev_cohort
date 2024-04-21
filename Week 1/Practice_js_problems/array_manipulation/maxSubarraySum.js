function maxSubarraySum(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element of the array
    let currentSum = nums[0]; // Initialize currentSum with the first element of the array
    
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum to either the current element or the sum of the current element and the previous sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update maxSum to the maximum of maxSum and currentSum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums)); 
