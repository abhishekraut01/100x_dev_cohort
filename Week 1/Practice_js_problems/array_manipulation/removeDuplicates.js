function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Empty array case
    
    let uniqueIndex = 0; // Index for placing unique elements
    
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous element, move it to the next unique position
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    
    // Length of the new array with duplicates removed is (uniqueIndex + 1)
    return uniqueIndex + 1;
}

// Example usage:
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); 
