function digitalRoot(n) {
    while (n > 9) {
        n = n
            .toString()
            .split('')
            .reduce((acc, cur) => acc + Number(cur), 0);
    }
    return n;
}

module.exports = digitalRoot;
