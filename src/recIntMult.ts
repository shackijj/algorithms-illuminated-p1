import greatSchoolAdd from './greatSchoolAdd';

export default function recIntMult(a: string, b: string): string {
    if (a.length === 1 && b.length === 1) {
        return String(Number(a) * Number(b));
    } else {
        const A = a.slice(0, a.length / 2);
        const B = a.slice(a.length / 2, a.length);
        const C = b.slice(0, b.length / 2);
        const D = b.slice(b.length / 2, b.length);
        const AC = recIntMult(A, C);
        const AD = recIntMult(A, D);
        const BC = recIntMult(B, C);
        const BD = recIntMult(B, D);
        const firstMember = AC + (String(Math.pow(10, a.length))).slice(1)
        const secondMember = greatSchoolAdd(AD, BC) + String(Math.pow(10, a.length / 2)).slice(1);

        return greatSchoolAdd(greatSchoolAdd(firstMember, secondMember), BD);
    }
}