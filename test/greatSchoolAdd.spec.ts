import greatSchoolAdd from '../src/greatSchoolAdd';

describe('greatSchoolAdd', () => {
    function checkOutput({a, b, result}: {a: string, b: string, result: string}) {
        it(`should compute ${a} + ${b} = ${result}`, () => {
            expect(greatSchoolAdd(a, b)).toBe(result);
        });
    }
    [
        {
            a: '21',
            b: '2',
            result: '23'
        },
        {
            a: '89',
            b: '75',
            result: '164'
        },
        {
            a: '900',
            b: '100',
            result: '1000'
        },
        {
            a: '3',
            b: '1',
            result: '4'
        }
    ].forEach(checkOutput);
})