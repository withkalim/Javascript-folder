// USE LOGICAL OPERATORS IN IF ELSE CONDITIOIN
var age = 34;

if (age == 18) {
    console.log("You are eligible for learning license.");
} else if (age > 18 && age < 81) {
    console.log("You are eligible for driving license");
} else {
    console.log("We can't give license under 18");
}


// LOGICAL OPERATORS:-
// (&& ) if all the condition are true then return true
// when any of one wrong it return false

// (||) if any of condition are true it return true
// when all the condition are false it return false

// switch condition
// var car = "contica";

// switch (car) {
//     case "supram4":
//         console.log("yeh it's supram4");
//         break;
//     case "gtr35":
//         console.log("the king of jdm gtr35");
//         break;
//     case "mustang":
//         console.log("mustang the iconic car ever")
//         break;
//     default:
//         console.log("None of any car match");
// }


var name = "tom";

switch (name) {
    case "saleem":
        console.log("Its saleem pheku");
        break;
    case "jerry":
        console.log("A noughty rat");
        break;
    case "tom":
        console.log("It's tom the fantastic billa");

}