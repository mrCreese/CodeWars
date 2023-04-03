const lowercaseCount = require('./regexCountLowercaseLetters');

const testLowercaseCount = [
    {
        test: 'abc',
        result: 3,
    },
    {
        test: 'abcABC123',
        result: 3,
    },
    {
        test: "abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~",
        result: 3,
    },
    {
        test: '',
        result: 0,
    },
    {
        test: "ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~",
        result: 0,
    },
    {
        test: 'abcdefghijklmnopqrstuvwxyz',
        result: 26,
    },
];

test('test lowercaseCount function', () => {
    testLowercaseCount.forEach((item) => {
        expect(lowercaseCount(item.test)).toEqual(item.result);
    });
});
