function lowercaseCount(str) {
    return str.replace(/[^a-z]/g, '').length;
}
module.exports = lowercaseCount;
