function revrot(str, sz) {
    if (sz <= 0 || sz > str.length) return '';
    let arr = [];

    for (let i = 0; i < str.length; i += sz) {
        let part = str.slice(i, i + sz);
        if (part.length === sz) {
            arr.push(part);
        }
    }

    arr = arr.map((item) => item.split(''));

    let reduceArr = arr.map((item) =>
        item.reduce((acc, cur) => cur ** 3 + acc, 0)
    );

    let tempArr = arr.map((item, index) =>
        reduceArr[index] % 2 === 0
            ? item.reverse().join('')
            : (item = item.join('').slice(1) + item.join('').slice(0, 1))
    );

    return tempArr.join('');
}

module.exports = revrot;
