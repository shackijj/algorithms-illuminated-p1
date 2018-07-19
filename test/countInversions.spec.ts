import countInversions from '../src/countInversions';

describe('greatSchoolAdd', () => {
    function checkOutput({input, output}: {input: number[], output: number}) {
        describe(`given that input is ${JSON.stringify(input)}`, () => {
            it('should count number of inversions', () => {
                expect(countInversions(input)).toBe(output);
            });
        })
    }
    [
        {
            input: [5, 4, 1],
            output: 2
        },
    ].forEach(checkOutput);
})