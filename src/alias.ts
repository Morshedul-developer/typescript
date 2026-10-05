type stringOrNumber = string | number;
type userDetailsType = {
  name: string;
  age: number;
  email: string;
};

const userDetails = (
id: stringOrNumber, user: userDetailsType
) => {
  console.log(
    `User id is ${id}, name is ${user.name}, age is ${user.age}, email is ${user.email}`,
  );
};

const sayHello = (user: userDetailsType) => {
  console.log(`Hello ${user.name}, age ${user.age}, email ${user.email}`);
};
