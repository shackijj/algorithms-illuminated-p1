export default function mergeSort(input: number[]): number[] {
    const length = input.length;
    if (length === 2) {
        if (input[0] > input[1]) {
            return [input[1], input[0]];
        } else {
            return [input[0], input[1]];
        }
    } else {
        const result = [];
        let unprimed = length % 2 === 0 ? null : input[length - 1];
        const a = unprimed === null ? input.slice(0, length / 2) : input.splice(0, (length - 1) / 2);
        const b = unprimed === null ? input.slice(length / 2, length) : input.splice((length - 1) / 2, length - 1);
    
        const sortedA = mergeSort(a);
        const sortedB = mergeSort(b);
        for (let i = 0, j = 0, k = 0; i < length; i++) {
            if (unprimed !== null && sortedA[j] >= unprimed && sortedB[k] >= unprimed) {
                result[i] = unprimed;
                unprimed = null;
            } else if (sortedA[j] >= sortedB[k]) {
                result[i] = sortedB[k];
                k++;
            } else {
                result[i] = sortedA[j];
                j++;
            }
        }
        return result;
    }
}
