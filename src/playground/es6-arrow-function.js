// function square (x){
//   return x * x;
// }

// // const squareArrow = (x) => {
// //   return x * x; 
// // };

// const squareArrow = (x) => x * x;


// // console.log(square(8));
// console.log(squareArrow(111));

//Challenge - use arrow functions for getFirstName function
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function 
// Create arrow function with expression syntax
// Test both functions

// var fullName = "Tom Spencer";
// let firstName;
// if(fullName){
//   firstName = fullName.split(" ")[0];
//   console.log(firstName);
// }

// console.log(firstName);

// const fullName = "Tom Spencer"
// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0];
// }

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("John Spencer"));


