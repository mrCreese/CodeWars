function isPangram(string) {
    let letters = [
        ...new Set(
            string
                .replace(/[\d\W]/gi, '')
                .toLowerCase()
                .split('')
        ),
    ].length;
    return letters === 26;
}

module.exports = isPangram;
