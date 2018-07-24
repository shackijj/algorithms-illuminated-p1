import countInversions, {TInversions} from '../src/countInversions';

describe('countInversions', () => {
    function checkOutput({input, output}: {input: number[], output: TInversions}) {
        describe(`given that input is ${JSON.stringify(input)}`, () => {
            it('should count number of inversions', () => {
                expect(countInversions(input)).toEqual(output);
            });
        })
    }
    [
        {
            input: [5, 4, 1, 3],
            output: {array: [1, 3, 4, 5], count: 5}
        },
        {
            input: [5, 4, 1, 3, 9, 12, 23, 14],
            output: {array: [1, 3, 4, 5, 9, 12, 14, 23], count: 6}
        },
        {
            input: [5, 4, 3, 1],
            output: {array: [1, 3, 4, 5], count: 6}
        },
    ].forEach(checkOutput);
});
