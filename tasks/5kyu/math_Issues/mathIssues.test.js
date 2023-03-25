const { roundMath, floorMath, ceilMath } = require('./mathIssues');

const roundTest = [
    {
        test: 0.4,
        resultRound: 0,
        resultFloor: 0,
        resultCeil: 1,
    },
    {
        test: 2.6,
        resultRound: 3,
        resultFloor: 2,
        resultCeil: 3,
    },
    {
        test: 1.49,
        resultRound: 1,
        resultFloor: 1,
        resultCeil: 2,
    },
    {
        test: 0.99,
        resultRound: 1,
        resultFloor: 0,
        resultCeil: 1,
    },
    {
        test: 1.73,
        resultRound: 2,
        resultFloor: 1,
        resultCeil: 2,
    },
];

describe('Math methods test', () => {
    test('Math.round test', () => {
        roundTest.forEach((item) => {
            expect(roundMath(item.test)).toEqual(item.resultRound);
        });
    });

    test('Math.floor test', () => {
        roundTest.forEach((item) => {
            expect(floorMath(item.test)).toEqual(item.resultFloor);
        });
    });

    test('Math.ceil test', () => {
        roundTest.forEach((item) => {
            expect(ceilMath(item.test)).toEqual(item.resultCeil);
        });
    });
});
