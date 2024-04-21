function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // To handle cases where k is greater than the length of the array
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const k = 2;
rotateArray(nums, k);
console.log(nums); // Output: [4, 5, 1, 2, 3]
