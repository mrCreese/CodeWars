const findNb = require('./buildAPileOfCubes');

const findNbTest = [
    {
        test: 4183059834009,
        result: 2022,
    },
    {
        test: 24723578342962,
        result: -1,
    },
    {
        test: 135440716410000,
        result: 4824,
    },
    {
        test: 40539911473216,
        result: 3568,
    },
];

test('test findNb function', () => {
    findNbTest.forEach((item) => {
        expect(findNb(item.test)).toEqual(item.result);
    });
});
