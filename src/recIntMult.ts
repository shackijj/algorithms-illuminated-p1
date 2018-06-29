import greatSchoolAdd from './greatSchoolAdd';

export default function recIntMult(a: string, b: string): string {
    if (a.length === 1 && b.length === 1) {
        return String(Number(a) * Number(b));
    } else {
        let aMul = 0;
        if (a.length % 2 !== 0) {
            a = a + '0'
            aMul = 1;
        }
        let bMul = 0;
        if (b.length % 2 !== 0) {
            b = b + '0';
            bMul = 1;
        }
        let diff = 0;
        if (a.length !== b.length) {
            diff = a.length - b.length;
            if (diff < 0) {
                a = a + '0'.repeat(Math.abs(diff));
            } else {
                b = b + '0'.repeat(diff);
            }
        }
        const A = a.slice(0, a.length / 2);
        const B = a.slice(a.length / 2, a.length);
        const C = b.slice(0, b.length / 2);
        const D = b.slice(b.length / 2, b.length);
        const AC = recIntMult(A, C);
        const AD = recIntMult(A, D);
        const BC = recIntMult(B, C);
        const BD = recIntMult(B, D);
        const firstMember = AC + '0'.repeat(a.length);
        const secondMember = greatSchoolAdd(AD, BC) + '0'.repeat(a.length / 2);

        const sumOfFirst = greatSchoolAdd(firstMember, secondMember);
        const result = greatSchoolAdd(sumOfFirst, BD);
        if (Math.abs(diff) + aMul + bMul !== 0) {
            return result.slice(0, -1 * (Math.abs(diff) + aMul + bMul));
        } else {
            return result;
        }
    }
}