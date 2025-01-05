console.log("OOP - Classes and Object");

/*
A javascript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype.
We can set prototype using __proto__
If object and prototype have same method, objects method will be used
*/

//method 1 to create object
const student = {
    fullName : "Prathmesh",
    marks : 90,
    printMarks() {
        console.log("marks are",this.marks);
    },
}
console.log(student.fullName);
student.printMarks();

//demonstation of setting prototype
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 5000,
};

karanArjun.__proto__ = employee;

console.log(karanArjun.salary);
karanArjun.calcTax();

/*
Class is a program code template for creating objects. Also a blueprint for instance i.e object
Those objects will have some state (variables) and some behaviour (functions) inside it.
syntax :
class MyClass {
    constructor(){... }
    myMethod(){...}
}

let myObj = new MyClass();

Constructor : It is special method which is automatically invoked by new and it also initializes object.
*/

//method 2 to create object using class
class ToyotaCar {
    constructor(mileage){
        console.log("constructor is called automatically when objec is created");
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar(10);
fortuner.start();
fortuner.stop();
console.log(fortuner.mileage);

/*
Inheritance : is passing down properties and methods from parent class to child class.
syntax -
class Parent {

}

class Child extends Parent {

}

Note - If child and parent have same method, childs method will be used (Method Overriding).

Super keyword : Used to call the constructor of its pareant class to acess the parents properties and methods.
*/

class Human{
    constructor(nationality){
        console.log("this is a constructor for class Human");
        this.nationality = nationality;
    }

    eat(){
        console.log("eating...");
    }

    sleep(){
        console.log("sleeping...");
    }

    work(){
        console.log("human is working...");
    }
}

class Doctor extends Human{
    constructor(specialization){
        super(); //to invoke parent class constructor   
        this.specialization = specialization;
        console.log("doctor is specailized in :", this.specialization); 
    }

    work(){
        console.log("doctor is working and his nationality is :", this.nationality);
    }
}

let rahul = new Doctor("neurology", "indian");
rahul.eat();
rahul.sleep();
rahul.work();

