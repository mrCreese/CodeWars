const revrot = require('./index');

test('reverse o rotate', () => {
    expect(revrot('123456987654', 6)).toBe('234561876549');
});

test('reverse o rotate', () => {
    expect(revrot('123456987653', 6)).toBe('234561356789');
});

test('reverse o rotate', () => {
    expect(revrot('66443875', 8)).toBe('64438756');
});

test('reverse o rotate', () => {
    expect(revrot('123456779', 8)).toBe('23456771');
});

test('reverse o rotate', () => {
    expect(revrot('', 8)).toBe('');
});

test('reverse o rotate', () => {
    expect(revrot('123456779', 0)).toBe('');
});

test('reverse o rotate', () => {
    expect(revrot('563000655734469485', 4)).toBe('0365065073456944');
});
