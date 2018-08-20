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
function choosePivot(A: number[], l: number, r: number) {
    const index = Math.floor(Math.random() * (r - l)) + l;
    swap(A, l, index);
}

function quickSortImp(A: number[], l: number, r: number) {
    if (l >= r) {
        return;
    }
    choosePivot(A, l, r);
    const pIdx = partitionArray(A, l, r);
    quickSortImp(A, l, pIdx - 1);
    if (pIdx + 1 <= r) {
        quickSortImp(A, pIdx + 1, r);   
    }
}

export default function quickSort(input: number[]): number[] {
    quickSortImp(input, 0, input.length - 1);
    return input;
}