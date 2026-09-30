let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
}

calc(10, 5, 'add'); // returns 15
calc(10, 5, 'subtract'); // returns 5
