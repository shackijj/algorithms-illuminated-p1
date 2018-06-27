export default function greatSchoolAdd(a: string, b: string): string {
    const result: number[] = [];
    let aIdx = a.length - 1;
    let bIdx = b.length - 1;
    let rem = 0;

    while(aIdx > -1 || bIdx > -1) {
        if (aIdx > -1 && bIdx > -1) {
            const sum = parseInt(a[aIdx]) + parseInt(b[bIdx]) + rem;
            if (sum >= 10) {
                rem = 1;
                result.unshift(sum - 10);
            } else {
                rem = 0;
                result.unshift(sum)
            }
        } else if (aIdx > -1) {
            if (rem > 0) {
                result.unshift(parseInt(a[aIdx]) + rem)
                rem = 0;
            } else {
                result.unshift(parseInt(a[aIdx]))
            }
        } else if (bIdx > -1) {
            if (rem > 0) {
                result.unshift(parseInt(b[bIdx] + rem));
                rem = 0;
            } else {
                result.unshift(parseInt(b[bIdx]));
            }
        }
        aIdx--;
        bIdx--;
    }

    if (rem > 0) {
        result.unshift(rem);
    }
    
    return result.join('');
}