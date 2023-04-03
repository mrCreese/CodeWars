const validatePIN = require('./RegexValidatePinCode');

const validatePinTest = [
    {
        test: '1',
        result: false,
    },
    {
        test: '1234567',
        result: false,
    },
    {
        test: '00000000',
        result: false,
    },
    {
        test: '-1.234',
        result: false,
    },
    {
        test: null,
        result: false,
    },
    {
        test: '1234',
        result: true,
    },
    {
        test: '134789',
        result: true,
    },
];

test('test validatePIN function', () => {
    validatePinTest.forEach((item) => {
        expect(validatePIN(item.test)).toEqual(item.result);
    });
});
