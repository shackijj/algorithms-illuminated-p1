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

export default function mergeSortAndCount(array: number[]): TInversions {
    const length = array.length;
    if (length === 2) {
        if (array[0] > array[1]) {
            return {count: 1, array: [array[1], array[0]]};
        } else {
            return {count: 0, array: array.concat([])};
        }
    } else {
        const {count: countX, array: x} = mergeSortAndCount(array.slice(0, length / 2));
        const {count: countY, array: y} = mergeSortAndCount(array.slice(length / 2, length))
        const {count: countZ, array: z} = mergeSortedArraysAndCount(x, y);
        return {count: countZ + countX + countY, array: z};
    }
}