// THE MEANING OF BLOCK SCOPE: This scope restricts the variable that is declared inside a specific block, 
// from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped.
// and Var variable don't restriction on block scope.


// block scope
// 1. var variable with scope 
// {
//     var x = 100;
// }
// console.log(x);

// 2. let variable with ouside of block scope

// {
//     let  y = "maxx";   
// }
// console.log(y);

// 3. const variable outside the block scope

// {
//     const z = 15;
// }
// console.log(z);

/* take let and cost for assign reassign and declare */
let number = 10;
console.log(number);
number = 100;
console.log(number);  // here we can see let can reassign
let number = 130;
console.log(number); // but not declared it

// let's also try it with const variable
const numbers = 10;
console.log(numbers);
numbers = 50;
console.log(numbers); //here we can see const can't reassign
const numbers = 90;
console.log(numbers); //const also not declare


// CONDITIONAL STATEMENT
var number1  = 50;
var number2 = 100;

if(number < number2){
    console.log(number + " Is less than " + number2);
}else if(number == number2){
    console.log("Both value is qual");
}else {
    console.log(number + " Is greater then " + number2);
}






