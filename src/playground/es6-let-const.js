let nameVar = "Andrew"; 
nameVar = "Tom";

console.log("nameVar", nameVar);

let nameLet = "Jet";

console.log("nameVar", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block Scoping

var fullName = "Tom Spencer";
let firstName;
if(fullName){
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);