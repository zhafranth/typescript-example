// String
let myName = "Max";

// Number
let myAge = 23;

// boolean
let hasHobby = true;

// Assign Type
let myRealAge: number; // type: string, number, boolean
myRealAge = 24;

// array
let myHobbies: any[];
myHobbies = ["watch", "learning", 10];

// tuples
let address: [string, number] = ["Jl.Permata", 9];

// Enum
enum color {
  gray,
  green,
  red,
}

let myColor: color = color.gray;

// any
let car: any = "suzuki"; //menerima semua tipe data
car = {
  color: "white",
  plat: 201,
};

// function & argument types
function setName(name: string): string {
  return name;
}

// void
function sayHello(): void {
  // =====>type: void, any, undifiend, string, number, boolean
  // =====>bebas dia mau lempar return atau tidak tpi kalau undifiend functionnya harus return sesuatu
  console.log("hello");
  return;
}

// function type
// =====>example function
function multiply(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

let myMultiply: (val1: number, val2: number) => number;
//=====> function sebagai tipe cuman bisa terima function yang sudah ditentukan bagaiamana paramter dan returnnya
myMultiply = multiply;

// Object
let siswa: {
  name: string;
  age: number;
};
siswa = {
  name: "zhafran",
  age: 24,
};

// Complex Object
let mahasiswa: {
  nim: number[];
  output: (params: number) => number;
};
mahasiswa = {
  nim: [10, 9],
  output: function name(params: number) {
    return params;
  },
};

// Costume Type(alias)
type Complex = { data: number[]; output: (params: string) => string };

let warga: Complex;
warga = {
  data: [10, 11],
  output: function name(params: string) {
    return params;
  },
};

// Multiple Types(union)
let actress: string | number;
actress = "max";
actress = 99;

// Check types
let finalValue = "its a string";
if (typeof finalValue === "string") {
  console.log(finalValue);
}

// never
function neverReturn(): never {
  throw Error("Ini Errror");
}

// nullable || set tsconfig stricNullChekc = true
let canBeNull: number | null;
canBeNull = 99;
canBeNull = null;
