interface Human {
  name: string;
  age: number;
  gender: string;
}

// object
const person = {
  name: "song",
  age: 25,
  gender: "male",
};

// 람다식 함수 =>
const sayHI = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}. you are a ${person.gender}!`;
};

console.log(sayHI(person));

export {};
