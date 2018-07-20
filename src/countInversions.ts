import mergeSort from "./mergeSort";

export type TInversions = {count: number, array: number[]};

function mergeSortedArraysAndCount(a: number[], b: number[]): TInversions {
    const array = [];
    const length = a.length + b.length;
    let count = 0;
    for(let i = 0, j = 0, c = 0; c < length; c++) {
        if (a[i] > b[j]) {
            array[c] = b[j];
            j++;
            count += a.length - i;
        } else if (a[i] === b[j]) {
            array[c] = b[j];
            j++
        } else {
            array[c] = a[i];
            i++;
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