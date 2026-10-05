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
