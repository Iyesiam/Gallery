function hasSubarraySum(arr, target) {
    // Initialize current sum and starting index of window
    let currentSum = 0;
    let start = 0;
  
    // Iterate through the array
    for (let end = 0; end < arr.length; end++) {
      // Add the current element to the current sum
      currentSum += arr[end];
  
      // If current sum equals target, return True
      if (currentSum === target) {
        return true;
      }
  
      // While current sum is greater than target, subtract the element at
      // starting index and increment start index to shrink window
      while (currentSum > target) {
        currentSum -= arr[start];
        start++;
      }
    }
  
    // If no subarray found, return False
    return false;
  }
  