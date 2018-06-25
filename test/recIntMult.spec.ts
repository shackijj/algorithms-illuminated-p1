import underTest from '../src/recIntMult';

describe('recIntMult', () => {
    function checkResult({a, b, result}: {a: string, b: string, result: string}) {
        expect(underTest(a, b)).toEqual(result);
    }
    it('returns the sum of two integers presented as strings', () => {
        [
            {
                a: '1',
                b: '2',
                result: '2'
            }
        ].forEach(checkResult);
    });
});