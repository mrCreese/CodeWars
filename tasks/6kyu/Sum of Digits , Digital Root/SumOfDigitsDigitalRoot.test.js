const digitalRoot = require('./SumOfDigitsDigitalRoot');

const digitalRootTest = [
    {
        test: 16,
        result: 7,
    },
    {
        test: 942,
        result: 6,
    },
    {
        test: 132189,
        result: 6,
    },
    {
        test: 493193,
        result: 2,
    },
];

test('test digitalRoot function', () => {
    digitalRootTest.forEach((item) => {
        expect(digitalRoot(item.test)).toEqual(item.result);
    });
});
