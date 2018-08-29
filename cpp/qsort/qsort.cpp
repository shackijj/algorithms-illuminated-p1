void swap(int array[], int i, int j) {
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

void choosePivot(int array[], int l, int r) {
    int index = l;
    swap(array, l, index);
}

int partitionArray(int array[], int l, int r) {
    int p = array[l];
    int i = l + 1;
    for(int j = l; j <= r; j++) {
        if (array[j] < p) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, l, i - 1);
    return i - 1;
}

int qsortImp(int array[], int l, int r) {
    if (l >= r) {
        return 0;
    }
    int len = r - l + 1;
    int count = len - 1;
    choosePivot(array, l, r);
    int pivotIdx = partitionArray(array, l, r);
    count += qsortImp(array, l, pivotIdx - 1);
    if (pivotIdx + 1 <= r) {
        count += qsortImp(array, pivotIdx + 1, r);
    }

    return count;
}

int qsort(int array[], int len) {
    return qsortImp(array, 0, len - 1);
}