const whatCentury = require('./whatCenturyIsIt');

const yearTest = [
    {
        test: '1999',
        result: '20th',
    },
    {
        test: '2011',
        result: '21st',
    },
    {
        test: '2154',
        result: '22nd',
    },
    {
        test: '2259',
        result: '23rd',
    },
    {
        test: '1234',
        result: '13th',
    },
    {
        test: '1023',
        result: '11th',
    },
    {
        test: '2000',
        result: '20th',
    },
];

test('test whatCentury function', () => {
    yearTest.forEach((item) => {
        expect(whatCentury(item.test)).toBe(item.result);
    });
});
