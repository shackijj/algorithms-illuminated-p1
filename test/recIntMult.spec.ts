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
            },
            {
                a: '4242',
                b: '93',
                result: '394506'
            },
            {
                a: '1000',
                b: '1000',
                result: '1000000'
            },
            {
                a: '100',
                b: '100',
                result: '10000'
            },
            {
                a: '42',
                b: '2',
                result: '84'
            },
            {
                a: '83',
                b: '53',
                result: '4399'
            },
            {
                a: '111',
                b: '222',
                result: '24642',
            },
            {
                a: '8340',
                b: '7530',
                result: '62800200'
            },
            {
                a: '8348',
                b: '7532',
                result: '62877136'
            },
            {
                a: '5678',
                b: '1234',
                result: '7006652'
            }
        ].forEach(checkResult);
    });
});