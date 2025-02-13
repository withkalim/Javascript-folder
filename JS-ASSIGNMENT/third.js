// 1. Swap Two Variables Without Using a Third Variable
let a = 5, b = 10;

a = 10;
b = 5;
console.log(a, b);
console.log("__________________________________");

// 2. Find the Largest of Three Numbers
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findLargest(3, 7, 5)); 
console.log("__________________________________");


// 3. Check If a Number is Prime
function isPrime(num) {
   if(num % 2 == 1){
      return true;
   }else {
    return false;
   }
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log("__________________________________");


// 4. Reverse an Array Without Using Built-in Methods
function reverseArray(arr) {
    var newArray = [];

  for(var i = arr.length-1; i >= 0 ; i--){
      newArray.push(arr[i])
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4]));
console.log("__________________________________");



// 5. Sum of Even Numbers in an Array
function sumEvenNumbers(arr) {
    var evenCount = 0;

   for(var i=0; i <= arr.length; i++){
     if(arr[i] % 2 === 0){
         evenCount += arr[i];
     }
   }
   return evenCount;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("__________________________________");


// 6. Count the Number of Vowels in a String
function countVowels(str) {
var vowel = "aeiouAEIOU";
var count = 0;

  for(let char of str){
       if(vowel.includes(char)){
         count++;
       }
  }
  return count;
}
console.log(countVowels("hello world"));
console.log("__________________________________");


// 7. Find the Second Largest Number in an Array
function secondLargest(arr) {
    var Largest = -Infinity;
    var secondLargest = -Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Largest) {
            secondLargest = Largest;
            Largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== Largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest([10, 20, 4, 45, 99]));
console.log("__________________________________");


// 8. Remove Duplicates from an Array
function removeDuplicates(dup) {
  var newArray2 = [];
  var DuplicatesContain = {};

for(var i=0; i< dup.length; i++){
    if(!DuplicatesContain[dup[i]]){
        DuplicatesContain[dup[i]] = true;

        newArray2.push(dup[i]);
    }
}
return newArray2;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("__________________________________");



// 9. Find Factorial of a Number (Using Loop)
function factorial(num) {
var sum = 1;

// i start from 2 bcs factorial is not work with 1 and 0
    for(var i=2; i<= num; i++){
      sum *= i;
    }
    return sum;
}
console.log(factorial(5));
console.log("__________________________________");



// 10. Check if an Array is Sorted (Ascending Order)
function isSorted(arr) {
   for(var i=0; i<= arr.length; i++){
     if(arr[i] > arr[i + 1]){
        return false;
     }
   }
   return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([1, 3, 2, 4, 5]));