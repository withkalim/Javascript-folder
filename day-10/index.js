// 1. Print numbers from who is odd number in array
var numArray = [6,32,63,10,31,25,8,21,14];

for(var i = 0; i < numArray.length; i++){
    // console.log(numArray[i]);
    if(numArray[i] % 2 != 0){
        console.log(numArray[i] + " is odd number");
    }
}
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");


// 2. Print array number except target number
var newArr = [20,42,113,52,13,9,49];
var target = 13;

var i = 0;
while (i < newArr.length) {

    if(newArr[i] != target){
        console.log(newArr[i]);
    }
    i++;
}
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");


// 3. Print array number except multiple target number
var array2 = [4, 23, 30, 13, 6, 32, 218, 10, 17];
var target1 = 30;
var target2 = 218;

var i = 0;
while (i < array2.length) {
    // console.log(array2[i]);

    if (array2[i] != target1 && array2[i] != target2) {
        console.log(array2[i]);
    }
    i++
}
console.log("_________________");



