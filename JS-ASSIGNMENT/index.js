// // && and || operators
// console.log(12 == 12 && 12 == 12);
// console.log(12 == 12 && 11 == 12);
// console.log('_______________________________');

// // or operators
// console.log(5 == 5 || 5 == 6);
// console.log(1 == 1 || 2 == 2);

// // check number is eve or odd
// console.log(12 % 2 == 0);
// console.log(12 % 2 == 1);

// // conditional statement
// if (2 > 4) {
//     console.log("yes, 2 is greater then 4");
// } else {
//     console.log("NO!, 2 is less then 4");
// }

// // user age must be greater than 18 to 80
// // user age if equal to 18 then learning
// // less than 18 and more then 80 no license
// var userAge = 18;
// if(userAge == 18){
//     console.log("You'r allowed for LL");
// }else if(userAge > 18 && userAge <= 80){
//     console.log("you'r  allowed for license");
// }else{
//     console.log("you'r not allowed for LL and DL");
// }

// // 2. Switch conditional statement.
// var usetSelectedFruit = "Mango";

// switch (usetSelectedFruit) {
//     case "Banana":
//         console.log("User selected fruit is banana");
//         break;
//     case "Apple":
//         console.log("User selected fruit is apple");
//         break;
//     case "Mango":
//         console.log("User selected fruit is mango");
//         break;
//     default:
//         break;
// }


// Assignment of if else question

// 1. Write program to check given number is even or odd
var mynum = 13;
if(mynum % 2 == 0){
    console.log(mynum, " is eve n number");
}else {
    console.log(mynum, " is odd number");
}

// 2. Write program to check person eligible for votes on their age
var userAge = 88;
if(userAge == 18){
    console.log("You are eligible for your first vote");
}else if(userAge > 18 && userAge < 75){
    console.log("You can give vote");
}else {
    console.log("Sorry you are not eligible for vote");
}

// 3. Find the largest of three number
var num1 = 40;
var num2 = 6;
var num3 = 52;

if(num1 > num2 && num1 > num3){
    console.log(num1, " is greater number");
}else if(num2 > num1 && num2 > num3){
    console.log(num2, " is greater number");
}else {
    console.log(num3, " is greater number");
}

// 4. Write a program to classify a number as positive, negative, or zero.
var checkNum = 0;
if(checkNum > 0){
    console.log(checkNum," is positive number");
}else if(checkNum < 0){
    console.log(checkNum, " is negative number");
}else {
    console.log("number is zero");
}

// 5. Write a program to determine whether a student passed or failed based on their score (pass mark: 40).
var score = 25;
if(score >= 35){
    console.log("Student passed");
}else {
    console.log("Student failed");
}


// 6. Write a program to calculate the grade of a student based on the following conditions
var StudentScore = 62;

var grade;
if (StudentScore >= 90) {
   grade = "A";
} else if (StudentScore >= 80 && StudentScore < 90) {
    grade = "B"
} else if (StudentScore >= 70 && StudentScore < 80) {
   grade = "C";

}else if(StudentScore < 70 && StudentScore > 50){
    grade = "D";
}else {
    console.log("Fail");
}
console.log(`Student got ${grade} grade`);


// 7. Write a program to check if a given string contains the word "JavaScript".
var myString = "I doing javaScript";

if(myString.includes("javaScript")){
    console.log("Yes, given string contains word javaScript");
}else {
    console.log("No, word javaScript found");
}


// 8. Write a program to validate if a number is within the range of 10 and 100 (inclusive).
var checkvalidNumber = 89;

if(checkvalidNumber >= 10 && checkvalidNumber <= 100){
    console.log("Yes The number is validate within the range");
}else {
    console.log("No, Number is out of the range");
}


// 9. Write a program to check if a character is a vowel or consonant.
var checkChar = "apple";
if (checkChar === "a" || checkChar === "e" || checkChar === "i" || checkChar === "o" || checkChar === "u") {
    console.log(`${checkChar} is a vowel.`);
} else if (checkChar >= "a" && checkChar <= "z"){
    console.log(`${checkChar} is a consonant.`);
 }else {
    console.log("No character is match");
}

// 10.  Write a program to determine if a given year is a leap year or not.
var newDate = new Date();
var currentyear = newDate.getFullYear();

if(currentyear % 4 == 0 && currentyear % 100 !== 0 || currentyear % 400 == 0){
    console.log("this year is leap year");
}else {
    console.log("No leap year");
}

// SWITCH CASE CONDITION STATEMENT
// 1. Write a program to print the day of the week based on a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).
var weekDay = 4;
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Saunday");
        break;
    default:
        console.log("none of them");
        break;
}


// 2. Write a program to perform basic arithmetic operations (add, subtract, multiply, divide) based on a user's choice.
var num1 = 10;
var num2 = 5;
var operations = "subtrac";

switch (operations) {
    case "subtrac":
        result = num1 - num2;
        console.log(`The subtraction is: ${result}`);
        break;
    case "add":
        result = num1 + num2;
        console.log(`The addition is: ${result}`);
        break;
    case "Multiply":
        result = num1 * num2;
        console.log(`The multiply is: ${result}`);
        break;
    case "divide":
        result = num1 / num1;
        console.log(`The division is: ${result}`);
        break;
    default:
        console.log("None of them");
        break;
}


// 3. 3. Write a program to display the season based on the month number (1-12).
// var month = 7;

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Winter");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         console.log("Rainy");
//         break;
//     default:
//         console.log("None of them month");
// }


// 4. Write program check the types of vahicle based on user input
// var userInput = "auto";

// switch (userInput) {
//     case "car":
//         console.log("You chose a Car. It's a four-wheeled vehicle!");
//         break;
//     case "bike":
//         console.log("You chose a bike. It's a two-wheeled vehicle!");
//         break;
//     case "auto":
//         console.log("You chose a auto. It's a three-wheeled vehicle!");
//         break;
//     case "bus":
//         console.log("You chose a bus. It's a four-wheeled vehicle!");
//         break;
//     default:
//         console.log("None of them input match");
//         break;
// }


// 5. 