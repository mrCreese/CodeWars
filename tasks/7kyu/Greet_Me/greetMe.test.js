const greet = require('./greetMe');

const greetTest = [
    {
        test: 'riley',
        result: 'Hello Riley!',
    },
    {
        test: 'HEnRy',
        result: 'Hello Henry!',
    },
    {
        test: 'LUISA',
        result: 'Hello Luisa!',
    },
];

test('test greet function', () => {
    greetTest.forEach((item) => {
        expect(greet(item.test)).toBe(item.result);
    });
});
