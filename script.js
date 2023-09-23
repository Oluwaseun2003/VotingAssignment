//some conditon commands
//< = less than
// > = greater than
// <= = grater than or equals to
// >= = greater than or equals to
// == = double equals to(equals to)
// === = triple equals to(strict equals to)(does not only check on values, it checks data types also)
// ! = not equals to

// || = or
// && = and
//  an else if 



// let age = 18;

// if (age > 18) {
//     console.log("yes, It is greater")
// } else if (age >= 20){
//     console.log("yes age")
// } else {
//     console.log("No condition")
// }


// let dogBark  =  true;
// let lionRoar = false

// if (!dogBark) {
// console.log("age is greater than 20")
// } else if (!lionRoar) {
// console.log("age is less than 3")
// }
// else if (!!dogBark) {
// console.log("maybe") 
// }
// else {
// console.log("no")
// }
 

// Assignment: Creating a Voting Eligibility Checker (JavaScript)

// Prompt to ask user for their age
let age = prompt("Hello there, what is your age?")

// prompt to ask for citizenship
var aCitizen = prompt("Are you a citizen of Nigeria? (yes or no)")

if (age >= 18 && aCitizen === "yes") {
    console.log("You're eligible to vote")
} else {
    console.log("you're not eligible to vote")
} 