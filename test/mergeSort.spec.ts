import mergeSort from '../src/mergeSort';

describe('mergeSort', () => {
    function check({input, output}: {input: number[], output: number[]}) {
        describe(`given that the input is array of number ${JSON.stringify(input)}`, () => {
            it('will return a new sorted array', () => {
                expect(mergeSort(input)).toEqual(output);
            });
        });
    }

    [
        {
            input: [4, 3, 2, 1],
            output: [1, 2, 3, 4]
        },
        {
            input: [5, 1, 7],
            output: [1, 5, 7]
        },
        {
            input: [5, 1, 7, 2, 6, 2],
            output: [1, 2, 2, 5, 6, 7]
        }
    ].forEach(check);
});