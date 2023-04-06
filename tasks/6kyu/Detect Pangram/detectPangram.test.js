const isPangram = require('./detectPangram');

const isPangramTest = [
    {
        test: 'The quick brown fox jumps over the lazy dog.',
        result: true,
    },
    {
        test: 'This is not a pangram.',
        result: false,
    },
    {
        test: 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ',
        result: true,
    },
    {
        test: 'AbCdEfGhIjKlM zYxWvUtSrQpOn',
        result: true,
    },
    {
        test: 'A pangram is a sentence that contains every single letter of the alphabet at least once.',
        result: false,
    },
];

test('test isPangram function', () => {
    isPangramTest.forEach((item) => {
        expect(isPangram(item.test)).toEqual(item.result);
    });
});
