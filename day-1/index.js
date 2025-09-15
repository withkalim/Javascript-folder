// // 1.types fo data    
// // String
// // Number
// // Boolean
// // undefined
// // null

// // 2. String
// console.log("testing");
// // 3. numbers
// console.log('46');  //number inside the quotes are also comes in string
// console.log(46); //it's true
// // 3. Boolean
// console.log(10 > 20);
// // 4. undefined
// console.log(typeof(car));

// //5. operators
// console.log("406" == 406); //its check data same or not
// console.log("406" === 406); //it's check data as well as types
// console.log(10 > 20);
// console.log(10 < 20);
// console.log(10 >= 10);
// console.log(2 <= 2);

// // 6. var variable
// // value assign
// // reassign
// // declare

// var number = 4;  // here we assign value
// console.log(number);
// number = 8;      // here we reassign last value to new
// console.log(number);
// var number = 10;  //this assign and declaration
// console.log(number);



// Basic asked practicle question in interview
// 1. Reverse a string or number

// function reverseNum(str1){
//     var storeVar = "";

//     for(let i = str1.length-1; i >= 0; i--){
//         storeVar += str1[i];
//     }
//     return storeVar;
// }
// console.log(reverseNum("mangloo"));

// // 2. or for reverse number
// function newReverse(num){
//     let revresed = 0;

//     while (num !== 0) {
//         let lastDigit = num % 10;
//         revresed = revresed * 10 + lastDigit;
//         num = (num / 10) | 0;
//     }
//    return revresed;
// }
// console.log(newReverse(8531));


// //3. count vowel in string
// const findVowel = (strVowel)=>{
//  var vowel = "aeiouAEIOU";
//  var vowelCount = 0;

//  for(let i = 0; i < strVowel.length; i++){
//     if(vowel.includes(strVowel[i])){
//         vowelCount++;
//     }
//  } 
//  return vowelCount;
// }
// console.log(findVowel("Maxico"));


// //4. find the largest number in array 
// the difference between large and small number is > or < use in if condition
// const findLargeNum = (arr1)=>{
//     let largeNum = arr1[0];

//     for(let i=0; i <= arr1.length; i++){
//         if(arr1[i] > largeNum){
//            largeNum =  arr1[i];
//         }
//     }
//     return largeNum;
// }
// console.log(findLargeNum([4,1,3,7,32,6]));

// 5. Find the smallest number in array
// const findSmallestNum = (arr2)=>{
//    var smallest = arr2[0];

//    for(let i=0; i<=arr2.length; i++){
//     if(arr2[i] < smallest){
//         smallest = arr2[i];
//     }
//    }
//    return smallest;
// }
// console.log(findSmallestNum([15,3,7,20,9]));


// 6. Add delete and update item in array
// var myArray = ["matcha","majito","gannajuice","mineralWalter"];
// myArray.push("Lassi"); for add item
// myArray.splice(1,1);   for delete item
// myArray[0] = "MangoJuice"; for update exist item
// console.log(myArray);


  // let noteArr = ["pahelwan","lassi","govenda","maharaj"];
  // noteArr.splice(2,1,('chanpaklaal'));
  // console.log(noteArr);

// parameter and argument
//   function fuunc(a, b){
//     console.log(a * b);
//   }
//   console.log(fuunc(10, 3));

// callBack function:- function just passes as an argument in another function and function can call it later after something finished
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback(); // calling the callback function
// }
// function sayBye() {
//   console.log("Welcome buddy!");
// }
// // Passing sayBye as a callback
// greet("Kalim", sayBye);

// setTimeout callBack 
// function greet(callback) {
//   setTimeout(() => {
//     console.log("Hello from setTimeout");
//     callback();
//   }, 2000);
// }

// function afterGreet() {
//   console.log("This runs after greeting");
// }

// greet(afterGreet);



// RETURN METHOD :- The return statement is used inside a function to send a value back to where the function was called.
// Think of it as giving back an answer after the function finishes its work.
// ✅ Why We Use return?

// To get a result from a function.
// To store that result in a variable.
// To use that result later in the program.
function returnFunc(player1, player2){
 return player1 + player2;
}
let name = returnFunc(7 , 45); //store the return value
console.log(name); //used varible value

