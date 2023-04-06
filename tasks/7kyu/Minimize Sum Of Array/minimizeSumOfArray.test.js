const minSum = require('./minimizeSumOfArray');

const minSumTest = [
    {
        test: [5, 4, 2, 3],
        result: 22,
    },
    {
        test: [12, 6, 10, 26, 3, 24],
        result: 342,
    },
    {
        test: [9, 2, 8, 7, 5, 4, 0, 6],
        result: 74,
    },
];

test('test minSum function', () => {
    minSumTest.forEach((item) => {
        expect(minSum(item.test)).toEqual(item.result);
    });
});
