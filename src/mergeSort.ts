function merge(sortedA: number[], sortedB: number[]) {
    const result = [];
    const length = sortedA.length + sortedB.length;
    for (let i = 0, j = 0, k = 0; i < length; i++) {
        if (sortedA[j] >= sortedB[k]) {
            result[i] = sortedB[k];
            k++;
            if (k === sortedB.length) {
                return result.concat(sortedA.slice(j, sortedA.length))
            }
        } else {
            result[i] = sortedA[j];
            j++;
            if (j === sortedA.length) {
                return result.concat(sortedB.slice(k, sortedB.length))
            }
        }
    }
    return result;
}

export default function mergeSort(input: number[]): number[] {
    const length = input.length;
    if (length === 1) {
        return input.concat([]);
    } else if (length === 2) {
        if (input[0] > input[1]) {
            return [input[1], input[0]];
        } else {
            return [input[0], input[1]];
        }
    } else {
        let unprimed = length % 2 === 0 ? null : [input[length - 1]];
        const a = unprimed === null ? input.slice(0, length / 2) : input.slice(0, (length - 1) / 2);
        const b = unprimed === null ? input.slice(length / 2, length) : input.slice((length - 1) / 2, length - 1);
 
        const sortedA = mergeSort(a);
        const sortedB = mergeSort(b);
        const result = merge(sortedA, sortedB);
        if (unprimed) {
            return merge(result, unprimed);
        } else {
            return result;
        }
    }
}
