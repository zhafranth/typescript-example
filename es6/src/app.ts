// let and const
let variable = "zhafran";
console.log(variable);

const lastName = "tharif";
console.log(lastName);

// Block Scope
function reset(): void {
  let variabel = 12; //variable hanya dapat digunakan didalam block scope {} dan tidak dapat digunakan diluat curli brases
  console.log(variabel);
}

// Arrow Function
const addNumber = (num1: number, num2: number): number => num1 + num2;
const greet = (): void => {
  console.log("apake");
};

// Default Parameter function
function setName(name: string = "abdul"): void {
  console.log(name);
}

setName("gofar");

// Rest and Spread Operator
const color = ["yellow", "red"];
const anyColor = [...color, "green"]; // Spread Operator

console.log(anyColor);

const setColor = (...rest: string[]) => {
  //=====Rest Operator : menerima semua props
  return rest;
};

setColor("yellow", "Red");

// Destructuring Arrays
const film: string[] = ["home alone", "i am legend"];
const [film1] = film;
console.log(film1);

// Desctructuring Object
const actor = { id: 1, userName: "Rio" };
const { id, userName: nickname } = actor;
console.log(nickname);
