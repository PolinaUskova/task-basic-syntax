export function romanToInteger(str) {
    let romanNotation = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    return str
        .toUpperCase()
        .split('')
        .reduce(function (s, v, i, array) {
            const [a, b, c] = [
                romanNotation[array[i]],
                romanNotation[array[i + 1]],
                romanNotation[array[i + 2]],
            ];
            return b > a ? s - a : s + a;
        }, 0);
}
