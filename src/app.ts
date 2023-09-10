class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

const depart = new Department("Accounting");

console.log(depart);
