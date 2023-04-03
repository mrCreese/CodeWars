function findNb(m) {
    let sum = 0;
    let i;
    for (i = 1; sum < m; i++) {
        sum += i ** 3;
    }
    return m === sum ? i - 1 : -1;
}
module.exports = findNb;
