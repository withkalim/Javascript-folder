// ARRAY BUILD-IN FUNCTION 

// // for add new element
// var arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// // for add new element from start
// var arr = [1,2,3,4];
// arr.unshift(0)
// console.log(arr);

// // for remove the starting element
// var newarr = [2,4,6,8,10];
// newarr.shift();
// console.log(newarr);


// // for remove element from last
// var newarr = [2,4,6,8,10];
// newarr.pop()
// console.log(newarr);

// slice used for return element from array range we set in functions
// var rangeArr = ["a","b","c","d","e"];
// const newalpha =  rangeArr.slice(2, 5);
// console.log(newalpha);


// splice return remove element of array and replace new element thier place

// var rangeArr = ["a","b","c","d","e"];
// const result =  rangeArr.splice(0 , 3);
// console.log(result); 


// Map() method create new array by result of given task and store in new variable
// var myarr = [2,5,8];
// const result = myarr.map((myarr)=> myarr * myarr);
// console.log(result); 


// forEach() method used for performe tasks of array element one by one each
// var element = [1,3,54,6,8,23];

// element.forEach( (ele)=> {
//     if(ele % 2 == 0){
//         console.log(`even number is: ${ele}`);
//     }else {
//         console.log(`odd number is: ${ele}`);
//     }
// })


// filter() method create shallow copy of array by filter the array element on function condition base
// var newOne = ["Strange", "Marocco","Mahabaleshwar","Los angles"];

// const result =  newOne.filter((newOne)=> newOne.length > 8);
// console.log(result);


// reduce() method calculation of each element of given array and return the value of calculation 
// var newarr2 = [1,2,3,4];

// var initualVal = 0;
// const additionOfValue = newarr2.reduce( (acu , cv)=> acu + cv,initualVal);
// console.log(additionOfValue);


// find() method return very first element on base function condition base 
//  var newarr2 = [1,2,3,4];

// const result2 =  newarr2.find((ele)=> ele > 2);
//  console.log(result2);


// findIndex() return index possition of given array element 
// var newarr2 = [1, 2, 3, 4];
// const result2 = newarr2.findIndex((ele) => ele > 2);
// console.log(result2, " number at index");


// Reverse the array element without use buil-in method
function reverseArray(array){
var newArray = [];

    for(var i = array.length-1; i >=0; i--){
        // console.log(array[i]);
       newArray[array.length-i-1] = array[i];
    }
    return newArray;
}
var sortedArray = ["a", "b", "c", "d"];
console.log(reverseArray(sortedArray));


// 1st iteration
// i = array.length-1; - array.length = 4; 4-1=3;
// i >=0  - 3 >= 0 true;
// newArray[array.length-i-1] = array[i];
// 4-3-1 = 0; = array[i] = array[3]
// [0 "d"];
// i--;

// // 2nd iteration
// i = array.length-1; - array.length = 4 - 1 = 3 i-- = 2
// i >= 0  - 2 >= 0 true;
// newArray[array.length-i-1] = array[i];
// 4-2-1 = 1;  array[i] = array[2];
// [1 "c"];
// i--
// and so on....



