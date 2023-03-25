function capitalize(s) {
    let arr = s.split('');
    const upperCase = (array, param) => {
        return array
            .map((item, index) =>
                index % 2 === param ? item : item.toUpperCase()
            )
            .join('');
    };
    let even = upperCase(arr, 1);
    let odd = upperCase(arr, 0);
    return [even, odd];
}

module.exports = capitalize;
