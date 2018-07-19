function merge(sortedA: number[], sortedB: number[]) {
    const result = [];
    const length = sortedA.length + sortedB.length;
    for (let i = 0, j = 0, k = 0; i < length; i++) {
        if (sortedA[j] >= sortedB[k]) {
            result[i] = sortedB[k];
            k++;
            if (k === sortedB.length) {
                for (let m = j; m < sortedA.length; m++) {
                    result.push(sortedA[m]);
                }
                break;
            }
        } else {
            result[i] = sortedA[j];
            j++;
            if (j === sortedA.length) {
                for (let m = k; m < sortedB.length; m++) {
                    result.push(sortedB[m]);
                }
                break;
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
        let uneven = length % 2 === 0 ? null : [input[length - 1]];
        const a = uneven === null ? input.slice(0, length / 2) : input.slice(0, (length - 1) / 2);
        const b = uneven === null ? input.slice(length / 2, length) : input.slice((length - 1) / 2, length - 1);
 
        const sortedA = mergeSort(a);
        const sortedB = mergeSort(b);
        const result = merge(sortedA, sortedB);
        if (uneven) {
            return merge(result, uneven);
        } else {
            return result;
        }
    }
}
