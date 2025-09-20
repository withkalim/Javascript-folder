// 1. Print numbers from 30 - 60 with range of 5
// for(var i = 30; i < 60; i+= 5){
//     console.log(i);
// }
// console.log("___________________");



// 2. Print number from 50 - 100 with range of 3 and count them
// var count = 0;
// for(var i = 50; i < 100; i+=3){
//     count++;
// }
// console.log(count);
// console.log("___________________");



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
// console.log("___________________");


//Question 4.  Print number from 233 to 456 and 
// find who is odd number inside it return count it
// var starting = 233;
// var end = 456;

// function findOddNumber(starting, end){
 
//     var count = 0;
//     for(var i = starting; i < end; i++){
//           if (i % 2 == 1) {
//             count++;
//           }
//     }
//     return count;
// }
// console.log(findOddNumber(starting, end));




// function findit(){

//   var newArr = [];
//   // var count = 0;
//   for(i = 10; i <= 50; i+= 5){

//     // console.log(i);
//     newArr.push(i + 10);
//     count++;
//   }
//   return newArr; // if return count write here
// }
// console.log(findit());




// loop with range of 3 with it's count 
// var count = 0;
// for(let i=50; i <=100; i+= 3){
//     count++;
// }
// console.log(count);
// console.log("**********************************");




// in loop find odd number with it count 
function findOdd(){
    var OddCount = 0;
    for(let i=1; i<=20; i++){
        if(i % 2 == 1){
            OddCount++;
        }
    }
    return " This is count Odd: "+ OddCount;
}
console.log(findOdd());