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
  // Pewarisan mewariskan semua properti dan method dari parent class
  constructor(name: string) {
    super(name, ``);
    this.age = 29;
  }
}

let person2 = new Giant("Sincinpng");
console.log(person2);

// Setter dan Getters
class Plant {
  private _species: string = "default";

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "default";
    }
  }

  get species() {
    return this._species;
  }
}

let tanaman = new Plant();

tanaman.species = "mawar";
console.log(tanaman.species);
tanaman.species = "Ma";
console.log(tanaman.species);

// Static Properti dan methods
class Helper {
  static pi: number = 3.14; // static agar daoat dipanggil tanpa disimpan dalam variabel
  static sum(n1: number, n2: number): number {
    return n1 + n2;
  }
}
Helper.sum(1, 2);
console.log(Helper.pi);

// Abstract class
abstract class Project {
  projectName: string = "default";
  abstract changeName(name: string): void;
}

class ItProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let project = new ItProject();
project.changeName("Informatika");

// Private constructur and singletons
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}
let only = OnlyOne.getInstance();

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
