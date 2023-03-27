function diamond(n) {
    let arr = [];

    if (n <= 0 || n % 2 === 0) {
        return null;
    }
    for (let i = 1; i <= n; i += 2) {
        let space = ' '.repeat((n - i) / 2);
        let star = '*'.repeat(i);
        arr.push(`${space}${star}\n`);
    }

    return [...arr, ...arr.slice(0, Math.floor(n / 2)).reverse()].join('');
}

module.exports = diamond;
