// Class Definition
class Person {
  public name: string; //Ketika sebuah property maupun method di set menjadi public, maka seluruh kode program di luar maupun didalam dari class bisa mengakses property maupun method tersebut, termasuk juga untuk class turunannya
  public type: string; //Private :Ketika sebuah property maupun method di set menjadi private, maka yang bisa mengaksesnya adalah hanya class itu sendiri, Dan class lain maupun class turunannya tidak bisa mengakses property atau method tersebut
  protected age = 20; //Ketika sebuah property maupun method di set menjadi protected, maka yang bisa mengaksesnya adalah class itu sendiri atau turunan dari class tersebut namun tidak bisa diakses dari luar class maupun turunan dari class tersebut
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  printAge(): void {
    console.log(this.age);
  }

  setType(params: string): void {
    this.type = params;
  }
}

let person1 = new Person("Zhafran", "cool");
person1.setType("telaso");

console.log(person1);
person1.printAge();

// Inheritance
class Giant extends Person {
  constructor(name: string) {
    super(name, ``);
    this.age = 29;
  }
}

let person2 = new Giant("Sincinpng");
console.log(person2);

// Basics
// class Department {
//   name: string;
//   employees: string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log("name : " + this.name);
//   }

//   addEmployees(employee: string) {
//     this.employees.push(employee);
//   }
// }

// const accounting = new Department("Accounting");
// console.log(accounting);

// accounting.describe();

// const accountingCopy = {
//   name: "bagus",
//   describe: accounting.describe,
//   employees: [],
// }; // this pada line 9 mengacu pada class depart temen, jika parameter pada descript dihilangkan hanya akan mengacu pada function
// accountingCopy.describe();
