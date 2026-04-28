// // charGPT explained well in loop explanation
// function rangeFun(){
//     var emptyArr = [];
// for(let i=10; i<=50; i+=2){
//   emptyArr.push(i + 10)
// }
// return emptyArr;
// }
// console.log(rangeFun());
// console.log("**********************************");

// // binary again paractice
// var binArr = [2,4,6,13,15,20,25,30];
// function CheckBin(){
//     left = 0;
//     right = binArr.length-1;
//     target = 25;

//     while(left <= right){
//         let midIndex = Math.floor((left + right)/2);

//         if(binArr[midIndex] == target){
//             return  "target at index no " + midIndex;
//         }else if(binArr[midIndex] < target){
//             left = midIndex + 1;
//         }else {
//             right = midIndex -1;
//         }
//     }
//     return "No target Found";
// }
// console.log(CheckBin());

// Sum of two number equal to target number
// var num = [10,5,15,4,25,16];
// target = 25;

// for(let i=0; i< num.length; i++){
//     for(let j= i+1; j<num.length; j++){

//         if(num[i] + num[j] === target){
//             console.log(num[i], num[j], "=", target);
//         }
//     }
// }

// object method for get the key and value
// let object = {
//     name : "ramphal",
//     location : "kaanpur",
//     occupation: "bawa"
// }
// object.age = "70 paar",
// console.log(object['age']);

// // check is object property exist or not inside it
// // console.log("occupation" in object);

// for(key in object){
//     console.log(key ,"=", object[key]);
// }

//  ======>setInterval (doubt) cleared
// var output = "This is set interval";
// let count = 0;
// var thisId =  setInterval(()=> {
//      console.log(output);
//     count++;

//     if(count > 5){
//         clearInterval(thisId);
//         console.log("You setInterval has been cleared");
//     }
// },2000)

// var StudentScore = 88;

// var grade;
// if (StudentScore >= 90) {
//   grade = "A";
// } else if (StudentScore >= 80 && StudentScore < 90) {
//   grade = "B";
// } else if (StudentScore >= 70 && StudentScore < 80) {
//   grade = "C";
// } else if (StudentScore < 70 && StudentScore > 50) {
//   grade = "D";
// } else {
//   console.log("Fail");
// }
// console.log(`Student got ${grade} grade`);

// // given year is leap or not
// let thisYear = 2004;
// if ((thisYear % 4 == 0 && thisYear % 100 !== 0) || thisYear % 400 == 0) {
//   console.log(`${thisYear} is leap year`);
// } else {
//   console.log(`${thisYear} is not leap year`);
// }

// // check day of week based on number given
// let weekDay = 2;

// switch (weekDay) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday happy day");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("None of them");
//     break;
// }

// // arthmetic operation perform
// let number1 = 5;
// let number2 = 15;
// let operator = "Multiply";

// switch(operator){
//     case "Add":
//       result = number1 + number2;
//         console.log(`The Addition is ${result}`);
//         break;
//         case "Minus":
//           result = number1 -number2;
//           console.log(`The Minus is ${result}`);
//           break;
//           case "Divided":
//              result = number1 / number2;
//           console.log(`The Divided is ${result}`);
//           break;
//           case "Multiply":
//              result = number1 * number2;
//           console.log(`The Multiply is ${result}`);
//           break;
//           default:
//             console.log("Out of them");
// }

// // count number of vowel in str
// function checkVowel(str){
//   let vowel = "aeiouAEIOU";
//   let count = 0;

//   for(let char of str){
//     if(vowel.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(checkVowel("Rocky Rambo"));

// var userAge = [11, 32, 4, 54, 64, 12, 10, 18, 44, 75, 22];

// const checkUserAge = (userAge) => {
//     // console.log(userAge);
//     var userEligible = 0;
//     var NotEligible = 0;
//     var userLearn = 0;

//     for (var i = 0; i < userAge.length; i++) {
//         if (userAge[i] > 18) {
//             userEligible++;
//         } else if (userAge[i] == 18) {
//             userLearn++;
//         } else {
//             NotEligible++;
//         }
//     }
//     console.log(`users eligibles: ${userEligible}`);
//     console.log(`user Ready for learn: ${userLearn}`);
//     console.log(`user not eligible: ${NotEligible}`);
// }
// checkUserAge(userAge);

// reverse array element
// function arr(array){

//   var newArray = [];
//   for(let i = array.length-1; i >=0; i--){
//     newArray[array.length-i-1] = array[i];
//   }
//   return newArray;
// }
// console.log(arr(["a","b","c","d","e"]));

// callBack function
// function mainfun(callbackFunc){
//   setInterval(()=>{
//     console.log("Here is setInterval");
//     callbackFunc();
//   },4000);
// }

// function callbackFunc(){
//   console.log("yah i'm callBack function");
// }
// mainfun(callbackFunc);

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

async function another2() {
  console.log("before");
  const result = await myPromise()
    .then((msg) => {
      return "resolve donnne";
    })
    .catch((error) => {
      return "Error accured";
    });
  console.log(result);
  console.log("after");
}
another2();

// const person1 = {
//   name : "john",
//   insideFunc: function(){
//     console.log("Welcome back ", this.name);
//   }
// }
// const person2 = {
//   name: "Wick",
//   anotherFunc : person1.insideFunc,
// }

// person1.insideFunc();
// person2.anotherFunc();

// const object1 = {
//   name: "kasarwadowli",
//   objemethod: function(city){
//     console.log(this.name, city);
//   }
// }
// const object2 = {
//   name: "ovla",
// }
// object1.objemethod.call(object2, "Thane City")

// 1 dec practice
// var place = "Banaras";

// switch (place) {
//   case "Varanasi":
//     console.log("This is place where mahesh babu latest movie get shoot");
//     break;
//   case "Allahbad":
//     console.log("The Place of Real Mafia's");
//     break;
//   case "Banaras":
//     console.log("Banaras hide the Ranjhana memories himself");
//     break;
//   default:
//     console.log("Default");
// }

// function call() {
//   console.log("Inside the function");
// }
// console.log("Outside the function");
// call();

// // return keword used
// var work = "Colaba";
// function useReturn(values) {
//   return values;
// }
// console.log(useReturn(work));

// // from 50-100 wth range 3 and give the count of them
// var count = 0;
// for (let i = 50; i < 100; i += 3) {
//   count++;
// }
// console.log(count);

// // same but add 10 for every element and return in array
// var start = 10;
// var end = 50;
// var range = 2;

// function a(start, end, range) {
//   arr = [];
//   for (let i = start; i <= end; i += range) {
//     arr.push(i + 17); //only add 10 very first in arr and next remain incremnt by 2 everytime.
//   }
//   return arr;
// }
// console.log(a(start, end, range));

// // print number except target one
// var arroo = [30, 2, 32, 41, 2, 52, 55, 6];
// var target = 2;

// let i = 0;
// while (i < arroo.length) {
//   if (arroo[i] != target) {
//     console.log(arroo[i]);
//   }
//   i++;
// }

// // sum equa to target
// var numsArr = [3, 11, 20, 2, 14, 3, 5];
// var tar = 10;

// for (let i = 0; i < numsArr.length; i++) {
//   for (let j = i + 1; j < numsArr.length; j++) {
//     for (let n = j + 1; n < numsArr.length; n++) {
//       if (numsArr[i] + numsArr[j] + numsArr[n] == tar) {
//         console.log(numsArr[i], numsArr[j], numsArr[n]);
//       }
//     }
//   }
// }

// var myObject = {
//     name: "user",
//     myArray: [10, 20, 30, 40, 50],
//     location: "Thane",
//     age: 20,
// }
// console.log(myObject['location']);

// 2 december
// console.log(2 == 2 && 2 == 2);
// console.log(2 == 1 && 2 == 2);

// console.log(2 == 12 || 2 == 2);
// console.log(2 == 12 || 2 == 12);

// var riderUser = 90;

// if (riderUser > 18 && riderUser <= 70) {
//   console.log("you can ride champion");
// } else if (riderUser == 18) {
//   console.log("You are eligible for learing for this moment");
// } else {
//   console.log("Sorry kid we don't allow you to enter this heaven");
// }

// // check person eligible for voting by used ternimiry operator
// var voterPerson = 23;
// var result =
//   voterPerson == 21
//     ? "Yes Try your first voting right"
//     : voterPerson > 21 && voterPerson <= 70
//     ? "Yes you can give vote"
//     : "You are not allowed for voting";

// console.log(result);

// // check number is positive negative or zero
// var num = 0;
// function checkNum() {

//   if (num > 0) {
//     return `${num} is positive number`;
//   } else if (num < 0) {
//     return `${num} is negative point`;
//   } else {
//     return `${num} is zero number`;
//   }
// }
// console.log(checkNum());

// // given string contain word we want or not
// var stringo = "It's sunset time";
// var want = "sunset";
// var found = false;

// for (let i = 0; i <= stringo.length; i++) {
//   let match = true;
//   for (let j = 0; j < want.length; j++) {
//     if (stringo[i + j] !== want[j]) {
//       match = false;
//       break;
//     }
//   }
//   if (match) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("yes given string contain word that we wanted");
// } else {
//   console.log("No word found that we wanted");
// }

// // check if character is vowel or consonant
// var ourChar = "Ginnie";

// if(ourChar === "a" || ourChar === "e" || ourChar === "i" || ourChar === "u" || ourChar === "o"){
//   console.log(`${ourChar} is contain vowels`);
// }else if(ourChar >= "a" && ourChar <= "z"){
//   console.log(`${ourChar} is consent`);
// }else{
//   console.log("No character is match");
// }

// reverse array element
// function reverseArray(arr) {
//   var newArray = [];

//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }
// console.log(reverseArray(["bhaikalla", "dongri", "bandra", "business center", "vijay parle"]));

// Another way to reverse the array element
// var AsscendingArr = ["elvi", "Aren", "mashukate","talos"];
// function reverseArray2(){
//   var newArray = [];

//   for(let i=AsscendingArr.length-1; i >=0; i--){
//    newArray[AsscendingArr.length-i-1] =  AsscendingArr[i];
//   }
// return newArray;
// }
// console.log(reverseArray2());

// function factorial(num) {
//   var sum = 1;

//   // i start from 2 bcs factorial is not work with 1 and 0
//   for (var i = 2; i <= num; i++) {
//     sum *= i;
//   // 1  *  2 = 2,
//   // 2  *  3 = 6,
//   // 6  *  4 = 24,
//   // 24 *  5 = 120 and this our factorial of 5
//   }
//   return sum;
// }
// console.log(factorial(6));

// 4 december
// var rangeArr = ["a","b","c","d","e"];
// const result =  rangeArr.splice(0 , 3);
// console.log(result);

// var arrow = [5,8,12,15,30,42,52];
// var arrowCon =  arrow.find((arr)=> arr > 12);
// console.log(arrowCon);

// clear setInterval
// var counter = 0;
// var intervalId = setInterval(()=>{
//   console.log("this is from interval");
//   counter++;

//   if(counter === 4){
//     clearInterval(intervalId);
//     console.log("Clerated innterval after reach 4");
//   }
// },[3000]);

// 6 december
// simple promise according to value true or false
// const promisva = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let response = false;
//     if (response) {
//       resolve("Men are still good");
//     } else {
//       reject("Rejected for bacchi");
//     }
//   }, 3000);
// });
// promisva
//   .then((msg) => {
//     console.log("Msg from then");
//   })
//   .catch((msg) => {
//     console.log("msg from catch");
//   })
//   .finally((msg) => {
//     console.log("Finally you promise completed here");
//   });

// FUNCTION PROMISE
// function newFunc(){
// return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// });
// }

// async function anotherFunc(){
//    console.log("Before");
//    const result = await newFunc().then((msg)=> {return "your promise is completed"}).catch((msg)=> {return "Error accured"});
//    console.log(result, "After");
// }
// anotherFunc();

// HOC high order function in js
// function myfunc(a, b, combinne){
//     return combinne(a, b);
// }

// let add = (a, b)=> a + b;
// let multi = (a, b)=> a * b;

// console.log(myfunc(20, 7, add));
// console.log(myfunc(12, 4, multi));

// function mainFun(zee){
//     return function (...max){
//         return zee(...max);
//     }
// }
// function NewFunc(a, b){
//     return a - b;
// }
// const addAllfunc = mainFun(NewFunc);
// console.log(addAllfunc(12, 2));

// const objOne = {
//     name: "Nawab saab",
//     funcOne : function(){
//         console.log("26 Saal se ", this.name , "chaarminaar pe hun");
//     }
// }
// const objTwo = {
//     name : "chaarminaar",
//     funcTwo : objOne.funcOne,
// }
// objOne.funcOne();
// objTwo.funcTwo();

// Constructor method of class
// class classOne {
//     constructor(id, jobRole){
//         this.id = id;
//         this.jobRole = jobRole;
//     }
//     aFun(){
//         return `${this.id} you given awesome performance at ${this.jobRole}`;
//     }
// }
// const classTwo = new classOne("11", "Maro Tech");
// console.log(classTwo.aFun());

// try catch for solving the problem
// let checkNum = 7540;

// async function checkResult() {
//   try {
//     if (checkNum >= 950) {
//         // here in condition  we first check 950 to comparison if it > so success otherwise < so error throw
//         throw new Error("Number is too small");
//     }
//       console.log("Success:", checkNum); // ✅ success

//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     console.log("Loading false");
//   }
// }

// checkResult();

// closure function
// function a(){
//     var someText = "This is coming from a() function";

//     function b(){
//         console.log(someText);
//     }
//     return b;
// }
// var resultofAorB = a();
// resultofAorB();

// Curring function
// function first(a){
//     return function (b){
//         return a + b;
//     }
// }
// console.log(first(13)(7));

// give 10% discount on product
// function product(discount){
//     return function(price){
//         return price - price * discount;
//     }
// }
// let productResult = product(0.1);
// console.log(productResult(100));

// call method with one another object data
const oneObj = {
  name: "Lukhnowi",
  func: function (pesha) {
    console.log("Miyah", this.name, " or kaam ", pesha, " ka karte h");
  },
};
const secondObj = {
  name: "Shakeel khillu bole hai ",
};
oneObj.func.call(secondObj, "kurte");

// Another call method with two another object data
//     function resolution(location){
//         console.log(`${location} people name mostly are ${this.name}`);
//     }
//    const newObj1 = {name: "Herry" }
//    const newObj2 = {name: "John"};

//    resolution.call(newObj1, "California");
//    resolution.call(newObj2, "Argentina");

// apply like call method with multi argument stored in array
// const ArrObj = {
//     name: "Fangg",
//     objFun: function(email, jobrole){
//         console.log(`${this.name} with recond ${email} now  apply for ${jobrole}`);
//     }
// }
// const ArrObj2 = {
//     name: "Zem tv",
// }
// ArrObj.objFun.apply(ArrObj2, ["levelUpcommunity.in", "Stole market anylisis"]);

//Bind() return new function and store it in variable for later use.
// const bObj = {
//   name: "Jethalal",
//   funk: function (nickname) {
//     console.log(`${this.name} ko pyaar se ${nickname} bolte hai`);
//   },
// };
// const bObj2 = {
//   name: "Mukesh",
// };
// const bResult = bObj.funk.bind(bObj2, "Dokla");
// bResult();

// An iterator is an object that provides a sequence of values and
// has a next() method that returns the next value in the sequence.
// here we called each value one by one by used next() and call another data between one next() to another next(). it's fully modify loop
// function Afunc(array) {
//   let iteratorIndex = 0;

//   return {
//     next: function () {
//       if (iteratorIndex < array.length) {
//         return { value: array[iteratorIndex++], done: false };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// }
// let resultOfFunc = Afunc(["Murari", "Rizwan", "Kundan"]);
// console.log(resultOfFunc.next());
// console.log(resultOfFunc.next());
// console.log(resultOfFunc.next());
// console.log(resultOfFunc.next());

// Generators is special kind of function that stop statement by used yeild and resume each it by used next()
// function* GeneratorFunc() {
//   yield "Breakfast";
//   yield "Lunch";
//   yield "Dinner";
// }
// let FunResult = GeneratorFunc();
// console.log(FunResult.next());
// console.log(FunResult.next());
// console.log(FunResult.next());

// WeakMap is used to safely store data to objects without causing memory leaks
// const newObj = { name: "Unknown" };

// const weakMapVar = new WeakMap();
// weakMapVar.set(newObj, "Logged user");
// console.log(weakMapVar.get(newObj));

// newObj = null;

// FROM HERE WE GOING TO PRACTICE FOR DSA PROBLEM

//1. check string is empty or not
var dsaString = "";

if (dsaString.length == 0) {
  console.log("True, String is empty");
} else {
  console.log("No! String is not empty");
}

// 2. find the last element of the array
var dsaArray = [2, 43, 5, 13, 82];

let ArrResult = dsaArray[dsaArray.length - 1];
console.log(ArrResult);

// 3. Multiply two number [without] using * operator
function myMulti(a, b) {
  var countMulti = 0;

  for (let i = 0; i < b; i++) {
    countMulti = countMulti + a;
  }
  return countMulti;
}
console.log(myMulti(5, 5));

// 4. Count the which character is repeat or which one is not.
function checkChar(str) {
  var checkCount = {};

  for (let char of str) {
    if (checkCount[char]) {
      checkCount[char]++;
    } else {
      checkCount[char] = 1;
    }
  }
  return checkCount;
}
console.log(checkChar("Holla"));

// 5. [INTERSECTION]- find the common element that appear in both array
