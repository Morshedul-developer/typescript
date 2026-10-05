let myFunc: Function;

myFunc = () => {
    console.log("Hello, World!");
};

myFunc(); // This will output: Hello, World!

const anotherFunc = (a: string, b: string) => {
    console.log(`Hello, ${a} and ${b}!`);
};

anotherFunc("Alice", "Bob"); // This will output: Hello, Alice and Bob!


//! optional parameters in TypeScript functions can be defined by adding a question mark (?) after the parameter name. Here's an example:

const myFunc2 = (a: string, b: string, c?: string) => {
    console.log(`Hi, ${c}!`);
    console.log(`Hello, ${a} and ${b}!`);
};

myFunc2("Alice", "Bob"); // This will output: Hello, Alice and Bob!

//! default parameters in TypeScript functions can be defined by assigning a default value to the parameter. Here's an example:

const myFunc3 = (a: string, b: string, c: string = "Charlie") => {
    console.log(`Hi, ${c}!`);
    console.log(`Hello, ${a} and ${b}!`);
};

myFunc3("Alice", "Bob");


//! function return types in TypeScript can be explicitly defined by adding a colon (:) followed by the return type after the parameter list. Here's an example:

const myFunc4 = (a: string, b: string): string => {
    return `Hello, ${a} and ${b}!`;
};

const result = myFunc4("Alice", "Bob");
console.log(result); // This will output: Hello, Alice and Bob!