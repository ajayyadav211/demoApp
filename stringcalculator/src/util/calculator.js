export function addString(num) {
    if (num === "") {
        return 0;
    }
    let delimiter = /,|\n/;
    if (num.startsWith("//")) {
        const parts = num.split('\n');
        delimiter = new RegExp(parts[0][2]);
        num = parts[1];
    }
    const result = num.split(delimiter).map(Number);

    return result.reduce((sum, num) => sum + num, 0);
}


