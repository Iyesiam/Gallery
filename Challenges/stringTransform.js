
function transformString(str) {
    const length = str.length;
  
    // Check divisibility by 3 and 5
    const divisibleBy3 = length % 3 === 0;
    const divisibleBy5 = length % 5 === 0;
  
    // Handle both divisibility cases together (reverse first)
    if (divisibleBy3 && divisibleBy5) {
      str = str.split('').reverse().join('');
    } else if (divisibleBy3) { // Only reverse if divisible by 3 but not 5
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
  
    return result.trim(); // Remove trailing space if any
  }
  