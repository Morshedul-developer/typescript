// normal variable
let b: string | number;

b = 2;
console.log(b);

// array

let a: string[] = [];

a.push("Hello");

let c: (string | number)[] = [];

c.push(4, "Hello");

// object

let d: object;

d = {
  name: "Hello",
  age: 25,
};

let e: {
  name: string;
  age: number;
  adult: boolean;
};

e = {
    name: "Test",
    age: 24,
    adult: true
}

let f: object;

f = [1, 2, 3] // It will accept, because array is a certain type of object
