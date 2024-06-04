function transformString(str) {
    const length = str.length;
  
    // Check divisibility by 3 and 5
    const divisibleBy3 = length % 3 === 0;
    const divisibleBy5 = length % 5 === 0;
  
    // Handle divisibility by both 3 and 5 (reverse first)
    if (divisibleBy3 && divisibleBy5) {
      str = str.split('').reverse().join('');
    }
  
    // Apply transformations based on divisibility
    let result = "";
    for (let i = 0; i < length; i++) {
      const char = str[i];
      if (divisibleBy5) {
        result += char.charCodeAt(0).toString() + " "; // Add space after code
      } else {
        result += char;
      }
    }
  
    // Reverse again if only divisible by 3
    if (divisibleBy3 && !divisibleBy5) {
      result = result.split('').reverse().join('');
    }
  
    return result.trim(); // Remove trailing space if any
  }