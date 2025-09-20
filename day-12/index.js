// // 1. find the index of array target number by use (liner search)
// // var array = [3,6,2,3,9,1,12,5];
// // var target = 9;

// // for(var i = 0; i < array.length; i++){
// //     // console.log(array[i]);

// //     if(array[i] === target){
// //         console.log("Index of target is " + i);
// //     }
// // }

// // 2. find the index of array target number by use (binary search).
// var array = [10, 20, 30, 40, 50, 60, 70, 80];
// var target = 70;

// function binarySearch(array, target) {
//   var left = 0;
//   var right = array.length - 1;

//   while (left <= right) {
//     var midIndex = Math.floor((right + left) / 2);
//     console.log(midIndex + " middle index" + array[midIndex]);

//     if (array[midIndex] == target) {
//       // 40 == 70 false
//       return midIndex;
//     } else if (array[midIndex] > target) {
//       //40 > 70 false
//       right = midIndex - 1;
//     } else if (array[midIndex] < target) {
//       left = midIndex + 1;
//     }
//   }
// }
// console.log(binarySearch(array, target));

// // binary search
// var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var target = 3;

// function Search(newArr) {
//   // console.log(newArr);
//   var left = 0;
//   var right = newArr.length - 1;

//   while (left <= right) {
//     console.log(left + " Left " + right + " Right ");
//     var midIndex = Math.floor((left + right) / 2); // 0 + 8 = 8/2 = 4
//     console.log("index " + midIndex + " array element " + newArr[midIndex]);

//     if (newArr[midIndex] === target) {
//       console.log(newArr[midIndex] + target + " newArr[midIndex] === target");
//       return midIndex;
//     } else if (newArr[midIndex] > target) {
//       console.log(newArr[midIndex] + target + " newArr[midIndex] > target ");
//       right = midIndex - 1;
//     } else if (newArr[midIndex] < target) {
//       console.log(newArr[midIndex] + target + " newArr[midIndex] < target");
//       left = midIndex + 1;
//     }
//   }
//   return "No target found";
// }
// console.log(Search(newArr));






