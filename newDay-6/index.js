// Trasitional function
// var a = 10;
// var b = 3; 
// function myFunc(){
//   var c = a * b;
//   return c;  
// }
// console.log(myFunc());

// // Arrow function (ES6:version)
// const newFunc = (string) => {
//     console.log(string);
// }
// newFunc("FIFA");


// Find out count of even or odd number.
// const findEvenOdd = (starting, ending) => {
//     var evenCount = 0;
//     var oddCount = 0;

//    while(starting <= ending){
//     if(starting % 2 == 0){
//        evenCount++; 
//     }else {
//         oddCount++;
//     }
//     starting++;
//    }
//    console.log(`even count: ${evenCount}`);
//    console.log(`odd count: ${oddCount}`);
// }
// findEvenOdd(10, 50);


// Given an array print count of eligible userage for license and not eligible and learnig license.
var userAge = [11, 32, 4, 54, 64, 12, 10, 18, 44, 75, 22];

const checkUserAge = (userAge) => {
    // console.log(userAge);
    var userEligible = 0;
    var NotEligible = 0;
    var userLearn = 0;

    for (var i = 0; i < userAge.length; i++) {
        if (userAge[i] > 18) {
            userEligible++;
        } else if (userAge[i] == 18) {
            userLearn++;
        } else {
            NotEligible++;
        }
    }
    console.log(`users eligibles: ${userEligible}`);
    console.log(`user Ready for learn: ${userLearn}`);
    console.log(`user not eligible: ${NotEligible}`);
}
checkUserAge(userAge);
