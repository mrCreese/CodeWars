const diamond = require('./giveMeADiamond');

const diamondTest = [
    {
        test: 1,
        result: '*\n',
    },
    {
        test: 3,
        result: ' *\n***\n *\n',
    },
    {
        test: 5,
        result: '  *\n ***\n*****\n ***\n  *\n',
    },
    {
        test: 2,
        result: null,
    },
    {
        test: -5,
        result: null,
    },
    {
        test: 0,
        result: null,
    },
];

test('test function diamond', () => {
    diamondTest.forEach((item) => {
        expect(diamond(item.test)).toBe(item.result);
    });
});
