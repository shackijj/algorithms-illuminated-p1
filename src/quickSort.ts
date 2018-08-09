function swap(A: number[], i: number, j: number) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function partitionArray(A: number[], l: number, r: number): number {
    const p = A[l];
    let i = l + 1;
    for(let j = l + 1; j <= r; j++) {
        if(A[j] < p) {
            swap(A, i, j);
            i += 1
        }
    }
    swap(A, l, i - 1);
    return i - 1;
}

function quickSortImp(A: number[], l: number, len: number) {
    if (len <= 1) {
        return;
    }
    const pIdx = partitionArray(A, l, len - 1);
    quickSortImp(A, l, pIdx - l);
    if (pIdx + 1 !== len) {
        quickSortImp(A, pIdx + 1, len - pIdx + 1);
    }
}

export default function quickSort(input: number[]): number[] {
    quickSortImp(input, 0, input.length);
    return input;
}