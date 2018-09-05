void swap(int array[], int i, int j) {
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

int choosePivot(int array[], int l, int r) {
    int first = array[l];
    int last = array[r];
    int len = r - l + 1;
    int middleIdx;
    if (len <= 2) {
        return l;
    }
    if (len % 2 == 0) {
        middleIdx = l + (len / 2) - 1;
    } else {
        middleIdx = l + (int) (len / 2); // floor
    }
    int middle = array[middleIdx];
    if ((first < middle && middle < last) || (last < middle && middle < first)) {
        return middleIdx;
    } else if ((middle < first && first < last) || (last < first && first < middle)) {
        return l;
    } else {
        return r;
    }
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
    int pivotIdx = choosePivot(array, l, r);
    swap(array, l, pivotIdx);
    pivotIdx = partitionArray(array, l, r);
    count += qsortImp(array, l, pivotIdx - 1);
    if (pivotIdx + 1 <= r) {
        count += qsortImp(array, pivotIdx + 1, r);
    }

    return count;
}

int qsort(int array[], int len) {
    return qsortImp(array, 0, len - 1);
}