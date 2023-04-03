function digitalRoot(n) {
    while (n < 10) return n;

    return digitalRoot(
        n
            .toString()
            .split('')
            .reduce((acc, cur) => acc + Number(cur), 0)
    );
}

module.exports = digitalRoot;
