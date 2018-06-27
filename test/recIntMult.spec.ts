import underTest from '../src/recIntMult';

describe('recIntMult', () => {
    function checkResult({a, b, result}: {a: string, b: string, result: string}) {
        expect(underTest(a, b)).toEqual(result);
    }
    it('multiplies two integers presented as strings', () => {
        [
            {
                a: '11',
                b: '22',
                result: '242'
            }
        ].forEach(checkResult);
    });
});