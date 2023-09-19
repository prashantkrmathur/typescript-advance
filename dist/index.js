"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const user = new User("Prashant Kumar", "prashant@google.com");
//  we can make public and private types in classes and by default public type is created
//  as in the above User class
class Employee {
    constructor(name, id, salary) {
        this.name = name; //public property
        this.id = id;
        this.salary = salary;
    }
}
const employee = new Employee("prashant", 10, 42555);
// typescript gives the superpower of writing the code in the shorter way like
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("Prashant kumar", 24);
// getter and setter in typescript
class Area {
    constructor(name, pincode) {
        this.name = name;
        this.pincode = pincode;
        this._areaCode = 1;
    }
    areaIPAdress() {
        return Math.floor(Math.random() * (this.pincode - 9876) + 3456);
    }
    getAreaName() {
        return `The area ${this.name}`;
    }
    get areaName() {
        return `${this._areaCode}-${this.getAreaName}`;
    }
    set areaName(areaCode) {
        if (areaCode === undefined || typeof areaCode !== "number")
            throw Error(`Invalid value for areaCode`);
        this._areaCode = areaCode * areaCode;
    }
}
class Region extends Area {
    constructor() {
        super(...arguments);
        this.regionId = 1;
    }
    changeAreaCode() {
        this._areaCode = 4;
        // the protected _areaCode can be used in the extended classes but not outside the classes.
    }
}
