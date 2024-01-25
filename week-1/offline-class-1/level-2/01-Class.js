//class declaration
//helps in writing resuable code ; 
//class is a blueprint for creating objects with pre-defined properties and methods
//class gives out the structure to create objects

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  describe() {
    return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}`
  }
  //this describe can be called on the object of the calls
  //like dog.describe()
  // but cant be called on the class itself

  static speaks() {
    return "I am an animal"
  }
  //static methods are distinctive to a class and not to the object
  //static methods are called on the class itself and not on the object
  // like this statics is available for animal class and not for the object dog
}


//bad practice
// let dog = {
//   name : "dog",
//   ...
// }

//good practice
let dog = new Animal("dog", 4, "bhow bhow ")
//this creates object of a class

dog.speaks();// calls function on the object  //dog object created  by the class