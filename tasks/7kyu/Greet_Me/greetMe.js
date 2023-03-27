var greet = function (name) {
    let upperName =
        name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${upperName}!`;
};

module.exports = greet;
