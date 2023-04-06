const generateShape = require('./buildASquare');

test('test generateShape function', () => {
    expect(generateShape(8)).toBe(
        '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
    );
});
