const dataReverse = require('./dataReverse');

const dataReverseTest = [
    {
        test: [
            1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
            1, 1, 0, 1, 0, 1, 0, 1, 0,
        ],
        result: [
            1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1,
        ],
    },
    {
        test: [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        result: [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
    },
];

test('test dataReverse function', () => {
    dataReverseTest.forEach((item) => {
        expect(dataReverse(item.test)).toEqual(item.result);
    });
});
