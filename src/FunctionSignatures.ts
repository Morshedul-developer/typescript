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


let userDetails: (id: string | number, user: { name: string; age: number; email: string }) => void;

userDetails = (id: string | number, user: { name: string; age: number; email: string }) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}, email is ${user.email}`);
};

console.log(userDetails(1, { name: 'John', age: 30, email: 'john@example.com' }));
