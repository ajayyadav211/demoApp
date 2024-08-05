export function addString(num) {
    if (num === "") {
        return 0;
    }
    let delimiter = /,|\n/;
    if (num.startsWith("//")) {
      const delimiterEndIndex = num.indexOf('\n');
      delimiter = new RegExp(num.substring(2, delimiterEndIndex));
      num = num.substring(delimiterEndIndex + 1);
    }


    const result = num.split(delimiter).map(Number);

    return result.reduce((sum, num) => sum + num, 0);
}


