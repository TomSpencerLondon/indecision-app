// // arguments object - no longer bound with arrow functions 

// const add = (a, b) => {
//   return a + b; 
// };



// console.log(add(55, 5, 1005));

// // this keyword - no longer bound with arrow functions

// const user = {
//   name: "Tom", 
//   cities: ["Philadelphia", "London", "Paris"], 
//   printPlacesLived() {
//     const cityMessages = this.cities.map((city) => this.name + " has lived in " + city);
//     return cityMessages;
//   }
// }; 

// console.log(user.printPlacesLived());

// Challenge area 

const multiplier = {
  // numbers - array of numbers 
  // multiplyBy - single number
  // return a new array where numbers have been multiplied
  numbers: [5, 4, 6],
  multiplyBy: 2,  
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]