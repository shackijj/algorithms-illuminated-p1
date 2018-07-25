export type TInversions = {count: number, array: number[]};

function mergeSortedArraysAndCount(a: number[], b: number[]): TInversions {
    const array = [];
    const length = a.length + b.length;
    let count = 0;
    for(let ai = 0, bi = 0, c = 0; c < length; c++) {
        if (ai < a.length && bi < b.length) {
            if (a[ai] > b[bi]) {
                array[c] = b[bi];
                count += a.length - ai;
                bi++
            } else {
                array[c] = a[ai];
                ai++;
            }
        } else if (ai === a.length) {
            array[c] = b[bi];
            bi++;
        } else {
            array[c] = a[ai];
            ai++;
        }
    }
    return {array, count};
}

function bubbleSortAndCount(array: number[]): TInversions {
    const result = array.concat([]);
    let count = 0;

    for(let max = result.length; max > 0; max--) {
        for(let i = 0; i < max - 1; i++) {
            if(result[i] > result[i + 1]) {
                const temp = result[i + 1];
                result[i + 1] = result[i];
                result[i] = temp;
                count++
            }
        }
    }
    return {array: result, count};
}

export default function mergeSortAndCount(array: number[]): TInversions {
    const length = array.length;
    if (length <= 3) {
        return bubbleSortAndCount(array);
    } else {
        const {count: countX, array: x} = mergeSortAndCount(array.slice(0, length / 2));
        const {count: countY, array: y} = mergeSortAndCount(array.slice(length / 2, length))
        const {count: countZ, array: z} = mergeSortedArraysAndCount(x, y);
        return {count: countZ + countX + countY, array: z};
    }
}