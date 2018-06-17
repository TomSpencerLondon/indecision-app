// Set up constructor to take name and age default to 0
// getDescription - Andrew Mead is 26 years old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name; 
    this.age = age; 
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription(){
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major; 
  }

  getDescription(){
    let description = super.getDescription();
    
    if(this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
    
    return description;

  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let getGreeting = super.getGreeting(); 

    if(this.hasHomeLocation()){
      getGreeting += ` I am visiting from ${this.homeLocation}`
    }

    return getGreeting;
  }
}

// Traveller extend person class. Add support for homeLocation.
// Over-ride getGreeting 
// 1. If homeLocation - super + visiting from Philadelphia
// 2. If no homeLocation just getGreeting: Hi I am Andrew Mead.

const me = new Traveller("Tom Spencer", 40, "San Francisco");
console.log(me.getGreeting()); 

const other = new Traveller(undefined, undefined, "Nowhere");
console.log(other.getGreeting());