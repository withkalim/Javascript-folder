//  (!=) OPERATOR

//  left side is equal to right side check
console.log(10 == 10);
console.log("_____________________________");

// simple check both are same or not with ! operators
console.log(3 != 13);
console.log("_____________________________");

// (!)== operators use check with data types
console.log(5 !== "5"); 
console.log("_____________________________");


// (!)= operators use with check number odd or not 
var newNum = 10;
console.log(newNum % 2 != 0);
console.log("_____________________________");

// 4. (!) use with if else condition
if(!10 > 5){
    console.log("Yes 10 is greater then 5");
}else {
    console.log(" condition is prof false")
}
console.log("_____________________________");

//While Loop
// 1. Print number range 10 - 1 by use while loop

var starting = 10;
while (starting > 0) {
    console.log(starting);
    starting--;
}
console.log("_____________________________");
// 2. Print only numbers from array - completed
// then add even condition - completed
// then calculation count of even numbers - completed

var newArr = [3,12,2,7,81,11,16];
var i = 0;
var count = 0;
while (i < newArr.length) {
    // console.log(newArr[i]);
    if(newArr[i] % 2 == 0){
        // console.log(newArr[i]);
        count++;
    }
    i++;
}
console.log(count, " is count of even number");













// 1. Print numbers from who is odd number in array
var numArray = [6,32,63,10,31,2,8,21,14];

for(var i = 0; i < numArray.length; i++){
    console.log(numArray[i]);
}