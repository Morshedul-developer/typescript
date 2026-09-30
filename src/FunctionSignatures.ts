let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
}
