class User {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("Prashant Kumar", "prashant@google.com");

//  we can make public and private types in classes and by default public type is created
//  as in the above User class

class Employee {
  public name: string;
  public id: number; // it will be accessible outside of the class only if declared with keyword 'public'
  private salary: number;
  constructor(name: string, id: number, salary: number) {
    this.name = name; //public property
    this.id = id;
    this.salary = salary;
  }
}

const employee = new Employee("prashant", 10, 42555);

// typescript gives the superpower of writing the code in the shorter way like

class Student {
  constructor(public name: string, private age?: number) {}
}

const student = new Student("Prashant kumar", 24);

// getter and setter in typescript

class Area {
  protected _areaCode = 1;
  constructor(public name: string, private pincode: number) {}
  private areaIPAdress(): number {
    return Math.floor(Math.random() * (this.pincode - 9876) + 3456);
  }
  private getAreaName(): string {
    return `The area ${this.name}`;
  }
  get areaName(): string {
    return `${this._areaCode}-${this.getAreaName}`;
  }
  set areaName(areaCode) {
    if (areaCode === undefined || typeof areaCode !== "number")
      throw Error(`Invalid value for areaCode`);
    this._areaCode = areaCode * areaCode;
  }
}

class Region extends Area{
  private regionId = 1;
  
  changeAreaCode() {
    this._areaCode = 4
    // the protected _areaCode can be used in the extended classes but not outside the classes.
  }

}