import countInversions, {TInversions} from '../src/countInversions';

describe('countInversions', () => {
    function checkOutput({input, output}: {input: number[], output: TInversions}) {
        describe(`given that input is ${JSON.stringify(input)}`, () => {
            it('should count number of inversions', () => {
                expect(countInversions(input)).toBe(output);
            });
        })
    }
    [
        {
            input: [5, 4, 1, 3],
            output: {array: [1, 3, 4, 5], count: 5}
        },
    ].forEach(checkOutput);
});
