type account = {
  money: number;
  deposit: (value: number) => void;
};

let bankAccount: account = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  },
};

let myAccount: {
  name: string;
  bank: account;
  hobbies: string[];
};
myAccount = {
  name: "alex",
  hobbies: ["swimming"],
  bank: bankAccount,
};

myAccount.bank.deposit(3000);
