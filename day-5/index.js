// let's look how return method work with if else statment
var num1 = 40;
function call(num1) {
    if (num1 > 50) {
        return "num1 is greater";
    } else if (num1 == 50) {
        return " num1 is equal";
    }
    return " num1 is less number";
    console.log("Before last return");  // it will not execute
}
console.log(call(num1));


// AN SIMPLE ARRAY FUNCTION WITH TYPES OF DATA TO STORE
var cars = ['mustang',1968, 'supra', 'gtr35', [1,4,100]];
console.log(cars); 


 
// how we can get last array value
var cars2 = ["mustang", "supra", "contica", "jaguar", "aston martin"];

console.log(cars2[cars2.length - 1 ]); 


// how we can find middle array value   --(we have to find 'contica')
var cars3 = ["mustang", "supra", "contica", "jaguar", "aston martin"];

console.log(cars3[Math.floor(cars3.length /2)]);


// how we can add new element in array
var place = ["asam","turbekistan","mahableshwer"];
place.push("kokan");
console.log(place);


// we can add new element at first position
var place = ["asam","turbekistan","mahableshwer"];
place.unshift("hiden gem");
console.log(place);


// how we can remove first element in array
var place2 = ["asam","turbekistan","mahableshwer"];
place2.shift();
console.log(place2);


// we also remove last element of array
var place3 = ["asam","turbekistan","mahableshwer"];
place3.pop();
console.log(place3); 