import mergeSort from '../src/mergeSort';
import quickSort from '../src/quickSort';
import * as fs from 'fs';

const bigArray = fs.readFileSync(__dirname + '/data/bigArray.txt', 'utf-8').split('\n').map(Number);
bigArray.concat([]).sort(function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

function checkTheSortingAlgo({name, func}: {name: string, func: (ary: number[]) => number[]}) {
    describe(name, () => {
        function check({input, output}: {input: number[], output: number[]}) {
            describe(`given that the input is array of number ${JSON.stringify(input)}`, () => {
                it('will return a new sorted array', () => {
                    expect(func(input)).toEqual(output);
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
            },
            {
                input: [54044, 14108, 79294, 29649, 25260, 60660, 2995],
                output: [2995, 14108, 25260, 29649, 54044, 60660, 79294]
            },
            {
                input: mergeSort(bigArray),
                output: bigArray.concat([]).sort(function(a, b) {
                    if (a > b) {
                        return 1;
                    } else if (a < b) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        ].forEach(check);
    });
}

[
    {
        name: 'mergeSort',
        func: mergeSort,
    },
    {
        name: 'quickSort',
        func: quickSort,
    }
].forEach(checkTheSortingAlgo)