

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // newArray has the values unique
    let newArray = nums.filter((value, index, array) => array.indexOf(value) === index);

    //sorted has the last array sorted
    let sorted = newArray.sort((a, b) => a - b);
    
    //now we get the sorted length -2 to get the second number larger
    let seconLargerIndex = sorted.length - 2;

    return sorted[seconLargerIndex];
}

