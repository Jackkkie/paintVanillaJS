const well = (firstNum, ...rest) => {
  console.log(`First number is: ${firstNum}`);
  console.log(rest);
};

well(1, 2, 3, 4, 5, 6, 7);

/// combine

const user = {
  name: "jang",
  age: 33,
  password: "123456",
  WHY: "don't know"
};

user["password"] = null;
console.log(user);

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
console.log(setCountry({ country: "USA", ...user }));
console.log(setCountry(user));

const renameAttribute = ({ WHY: why, ...rest }) => ({ why, ...rest });
console.log(renameAttribute(user));
