// 1. Write a for loop to print numbers from 1 to 10.
for(var i=1; i <= 10; i++){
    console.log(i);
}
console.log("_____________________________________");

// 2. Use a for loop to print all even numbers between 1 and 20.
for(var i=1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("_____________________________________");

// 3. Use a for loop to print all numbers divisible by 5 between 1 and 50.
for(var i =1; i <= 50; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}
console.log("_____________________________________");

// 4. Write a loop to calculate the factorial of a given number.
var numbers = 5;
var factorialCounter = 1;

for(var i=1; i <= numbers; i++){
     console.log(factorialCounter *= i);
}
console.log("_____________________________________");

//5. Use a for loop with a conditional to print all odd numbers between 1 and 20.
var findOdd = 20;
for(var i=0; i < findOdd; i++){
    if(i % 2 != 0){
        console.log(i);
    }
} 
console.log("_____________________________________");


// 6. Write a loop to calculate the sum of all even numbers between 1 and 100.
var evenCounter = 0;

for(var i=1; i <= 100; i++){
    if(i % 2 == 0){
        evenCounter++;
    }
}
console.log(evenCounter);
console.log("_____________________________________");


// 7.Use a loop to check if a given number is prime.
var nums = 13;
for(var i=2; i <= nums; i++){
    if(nums % 2 === 0){
        console.log(`${nums} is prime not number`);
    }else {
        console.log(`${nums} is prime number`);
    }
}
console.log("_____________________________________");

var number = 14;
for(var i=2; i <= 50; i++){
    if(number % 2 === 0){
        console.log("not prime");
    }else{
        console.log("Prime");
    }
}
console.log("_____________________________________");

//8. Create a for loop to find the smallest number in an array.
var num = [12,4,2,8,10];
var smallest = num[0];

for(var i =0; i < num.length; i++){
   if(num[i] < smallest){
    smallest = num[i];
   }
}
console.log(`The smallest number in the array is: ${smallest}`);
console.log("_____________________________________");



// 3. Write a loop to calculate the sum of the first 10 natural numbers.
let sumNum = 0;

for(var i=0; i <= 10; i++){
    sumNum += i;
}
console.log(`Sum of given number is: ${sumNum}`);
console.log("_____________________________________");



// INTERMEDIATE LEVEL

// 11.Write a for loop to count the number of vowels in a string.
var strs = "vowel";
var vowelCounter = 0;
for (var i = 0; i < strs.length; i++) {
    if (strs[i] == "a" || strs[i] == "e" || strs[i] == "i" || strs[i] == "o" || strs[i] == "u") {
        vowelCounter++;
    }
}
console.log(`The number of vowels in string are: ${vowelCounter}`);
console.log("_____________________________________");


// 12. Use a loop to find the largest number in an array.
var checkArray = [3,10,25,91,5,23];
var largest = checkArray[0];

for(var i=0; i < checkArray.length; i++){
    if(checkArray[i] > largest){
        largest = checkArray[i];
    }
}
console.log(`the largest number of array is: ${largest}`);
console.log("_____________________________________");


// 13. Write a loop to calculate the sum of numbers in an array.
var numArr = [12,43,65,73,3,9];
var sum = 0;

for(var i=0; i< numArr.length; i++){
    sum += numArr[i];
}
console.log(`Sum of array number is: ${sum}`);
console.log("_____________________________________");


// 14. Use a for loop to print all elements of an array in reverse order.
var strinArr = ["Aston martin", "jaguar", "Mustang","supra"];

for(var i = strinArr.length - 1; i >= 0; i--){
    console.log(strinArr[i]);
}
console.log("_____________________________________");

// 15. Write a loop to generate a multiplication table for a given number.
var table = 4;

for(var i=1; i <= 10; i++){
    var multiply = table * i;
    console.log(`${table} * ${i} = ${multiply}`);
}
console.log("_____________________________________");


// 16. Write a program to check if a given string is a palindrome using loops.
var checkStr = "radar";

for(var i =0; i < Math.floor(checkStr.length / 2); i++){
    if(checkStr[i] !== checkStr[checkStr.length-1-i]){
        console.log("Sorry! given string not palindrome");
    }else{
        console.log("Yes it's palindrome");
    }
}
console.log("_____________________________________");


// 17. Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100.
// for(var i=1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }
console.log("_____________________________________");


// 18. Write a loop to find the second-largest number in an array.
var newArrs = [5,10,8,27,91];
var largest = -Infinity;
var secondLarge = -Infinity;

for(var i=0; i<newArrs.length; i++){
    if(newArrs[i] > largest){
        // If the current element is greater than largest, update secondLargest to largest (to track the second-largest number) and then update largest to the current element.
      secondLarge = largest;
      largest =  newArrs[i];
    }else if(newArrs[i] > secondLarge && newArrs[i] !== largest){
        // if the current element is greater than secondLargest but not equal to largest, update secondLargest.
        secondLarge = newArrs[i];
    }
}
console.log(secondLarge);
console.log("_____________________________________");


// 19. Use a for loop to find all perfect squares between 1 and 100.
for(var i=1; i<=100; i++){

    // 1.The Math.sqrt(i) function calculates the square root of i.
    // 2.The % 1 === 0 condition checks if the square root is an integer (i.e., the number is a perfect square).
    if(Math.sqrt(i) % 1 == 0){
        console.log(i);
    }
}
console.log("_____________________________________");


// 20. Use a loop and conditionals to print the Fibonacci sequence up to n terms.
var FibonacciNum = 10;
var a = 0;
var b = 1;

for(var i=1; i <= FibonacciNum; i++){
    console.log(a);
    var nextTerm = a + b;
    a = b;
    b = nextTerm;
}

 
  