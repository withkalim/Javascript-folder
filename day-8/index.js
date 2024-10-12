// 1. print the number from 10 - 1
for(var i = 10; i >= 1; i--){
    
    console.log(i);
}
console.log("________________________");


// 2. Print number 45 - 25 which is even number inside it
for(var i = 45; i >= 25; i--){

    if(i % 2 == 0){
        console.log(i)
    }
}
console.log("________________________");


// 3. Print element from array
var cars  = ["Mustang", "GTR", "Supra","Astan martine", "MK4"];

console.log(cars.length);
for(var i = 0; i < cars.length; i++){
         console.log(cars[i]);
}
console.log("________________________");


// 4. Print count of odd number from array
var num = [14,53,25,2,43,54,64,27];

var count = 0;
for(var i = 0; i < num.length; i++){
    // console.log(num[i]);

    if (num[i] % 2 == 1) {
        count++;
    }
}
console.log(count);