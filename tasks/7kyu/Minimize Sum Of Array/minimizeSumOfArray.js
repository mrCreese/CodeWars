function minSum(arr) {
    let arrSort = arr.sort((a, b) => a - b);
    let length = arrSort.length;
    let sum = 0;
    for (let i = 0; i < length / 2; i++) {
        sum += arrSort[i] * arrSort[length - 1 - i];
    }

    return sum;
}
module.exports = minSum;
