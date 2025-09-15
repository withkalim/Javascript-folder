// terminary operators
// 1. two condition statment
var age = 16;

var isAllowed = age > 20 ? "allowed for ll" : "Not allowed for dl";
console.log(isAllowed);

// 2. terminary with multiple
var mark = 85;

var grades =
  mark >= 90
    ? "you got A"
    : mark >= 80
    ? "you got b"
    : mark >= 70
    ? "you got c"
    : "sorry you failed";
console.log(grades);

// for in loop work with object mostly
var myobject = { name: "jonhattam", age: 32, location: "chicago" };
for (key in myobject) {
  console.log(key, ":", myobject[key]);
}

// for of loop used for array element iteration
var myArr = ["Mahabaleshvar", "bhandup", "meghalia"];

for (key of myArr) {
  console.log(key);
}

// (High order component) is accept another function is an parameter and return it's function

// function funcOperators(a, b, operator) {
//   return operator(a, b);
// }

// const add = (x, y) => x + y;
// const multi = (x, y) => x - y;

// console.log(funcOperators(10, 6, add));
// console.log(funcOperators(10, 6, multi));

// HOC with another example
// function withLoggin(fn){
//     return function (args) {
//         return fn(args);
//       };
// }
//     function add(a, b){
//         return a + b;
//     }
//     const withTwofunc = withLoggin(add);
// console.log(withTwofunc(5, 20));

// this-> keyword work with traditional function well
// this -> keyword with arrow function
// let myobj = {
//   name: "banti",
//   age: 32,
//   something: function () {
//     console.log(`hii ${this.name} is here`);
//   },
// };
// myobj.something();


// for more understand this with two  object
const person1 = {
  name : "john",
  insideFunc: function(){
    console.log("Welcome back ", this.name);
  }
}
const person2 = {
  name: "Wick",
  anotherFunc : person1.insideFunc,
}

person1.insideFunc();
person2.anotherFunc();

// Class object with contructer method
class myClass {
  constructor(name, locationn) {
    this.name = name;
    this.locationn = locationn;
  }
  newMsg() {
    return `Hi i'm ${this.name} and Currently we are in ${this.locationn}`;
  }
}
const newClass = new myClass("Peter", "palao");
console.log(newClass.newMsg());





