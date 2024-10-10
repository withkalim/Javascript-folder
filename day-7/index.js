// 1. Print numbers from 30 - 60 with range of 5
// for(var i = 30; i < 60; i+= 2){
//     console.log(i);
// }

// 2. Print number from 50- 100 with range of 3 and count them
// var count = 0;
// for(var i = 50; i < 100; i+=3){
//     count++;
// }

// console.log(count);

// 3. Print number from 10 - 50 with range 2 
// add 10 for every element & return in array
// var starting = 10;
// var end = 50;
// var sequnce = 2;

// function numbers(starting, end, sequnce){
//     var emptyarr = [];
//     for(var i = starting; i <= end; i+= sequnce){
//       emptyarr.push(i + 10); 
//     }
//     return emptyarr;
// }
// console.log(numbers(starting, end, sequnce));


// Print number from 233 to 456 and 
// find who is odd number inside it return count it
var starting = 1;
var end = 10;

function findOddNumber(starting, end){
 
    var count = 0;
    for(var i = starting; i < end; i++){
          if (i % 2 == 1) {
            count++;
          }
    }
    return count;
}
console.log(findOddNumber(starting, end));