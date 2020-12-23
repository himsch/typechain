class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const song = new Human("Song", 25, "female");

// 람다식 함수 =>
const sayHI = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}. you are a ${person.gender}!`;
};

console.log(sayHI(song));

export {};
