const capitalize = require('./alternateCapitalization');

const testExample = [
    {
        input: 'abcdef',
        result: ['AbCdEf', 'aBcDeF'],
    },
    {
        input: 'codewars',
        result: ['CoDeWaRs', 'cOdEwArS'],
    },
    {
        input: 'abracadabra',
        result: ['AbRaCaDaBrA', 'aBrAcAdAbRa'],
    },
    {
        input: 'codewarriors',
        result: ['CoDeWaRrIoRs', 'cOdEwArRiOrS'],
    },
];

test('Alternate capitalization', () => {
    testExample.forEach((item) => {
        expect(capitalize(item.input)).toEqual(item.result);
    });
});
