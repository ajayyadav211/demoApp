export function addString(num) {
    if (num === "") {
      return 0;
    }
    const result = num.split(',').map(Number);
    return result.reduce((sum, num) => sum + num, 0);
  }

