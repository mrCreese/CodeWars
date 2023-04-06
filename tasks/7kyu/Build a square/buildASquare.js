function generateShape(integer) {
    let plusString = Array(integer).fill('+').join('');
    let result = plusString;
    for (let i = 0; i < integer - 1; i++) {
        result += `\n${plusString}`;
    }
    return result;
}

module.exports = generateShape;
