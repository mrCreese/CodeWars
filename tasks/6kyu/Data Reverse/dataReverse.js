function dataReverse(data) {
    let out = [];
    let i = 0;
    while (i < data.length) {
        out.unshift(...data.slice(i, i + 8));
        i += 8;
    }

    return out;
}

module.exports = dataReverse;
