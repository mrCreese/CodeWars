const check = require('./needOne');

const testExample = [
    {
        testCase: {
            a: [66, 101],
            x: 66,
        },
        result: true,
    },
    {
        testCase: {
            a: [80, 117, 115, 104, 45, 85, 112, 115],
            x: 45,
        },
        result: true,
    },
    {
        testCase: {
            a: ['t', 'e', 's', 't'],
            x: 'e',
        },
        result: true,
    },
    {
        testCase: {
            a: ['what', 'a', 'great', 'kata'],
            x: 'kat',
        },
        result: false,
    },
];

test('simple test', () => {
    testExample.forEach((item) => {
        expect(check(item.testCase.a, item.testCase.x)).toBe(item.result);
    });
});
