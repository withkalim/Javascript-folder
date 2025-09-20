// // charGPT explained well in loop explanation
// function rangeFun(){
//     var emptyArr = [];
// for(let i=10; i<=50; i+=2){
//   emptyArr.push(i + 10)
// }
// return emptyArr;
// }
// console.log(rangeFun());
// console.log("**********************************");

// // binary again paractice
// var binArr = [2,4,6,13,15,20,25,30];
// function CheckBin(){
//     left = 0;
//     right = binArr.length-1;
//     target = 25;

//     while(left <= right){
//         let midIndex = Math.floor((left + right)/2);

//         if(binArr[midIndex] == target){
//             return  "target at index no " + midIndex;
//         }else if(binArr[midIndex] < target){
//             left = midIndex + 1;
//         }else {
//             right = midIndex -1;
//         }
//     }
//     return "No target Found";
// }
// console.log(CheckBin());

// Sum of two number equal to target number
// var num = [10,5,15,4,25,16];
// target = 25;

// for(let i=0; i< num.length; i++){
//     for(let j= i+1; j<num.length; j++){

//         if(num[i] + num[j] === target){
//             console.log(num[i], num[j], "=", target);
//         }
//     }
// }

// object method for get the key and value
// let object = {
//     name : "ramphal",
//     location : "kaanpur",
//     occupation: "bawa"
// }
// object.age = "70 paar",
// console.log(object['age']);

// // check is object property exist or not inside it
// // console.log("occupation" in object);

// for(key in object){
//     console.log(key ,"=", object[key]);
// }

//  ======>setInterval (doubt) cleared
// var output = "This is set interval";
// let count = 0;
// var thisId =  setInterval(()=> {
//      console.log(output);
//     count++;

//     if(count > 5){
//         clearInterval(thisId);
//         console.log("You setInterval has been cleared");
//     }
// },2000)

var StudentScore = 88;

var grade;
if (StudentScore >= 90) {
  grade = "A";
} else if (StudentScore >= 80 && StudentScore < 90) {
  grade = "B";
} else if (StudentScore >= 70 && StudentScore < 80) {
  grade = "C";
} else if (StudentScore < 70 && StudentScore > 50) {
  grade = "D";
} else {
  console.log("Fail");
}
console.log(`Student got ${grade} grade`);

// given year is leap or not
let thisYear = 2004;
if ((thisYear % 4 == 0 && thisYear % 100 !== 0) || thisYear % 400 == 0) {
  console.log(`${thisYear} is leap year`);
} else {
  console.log(`${thisYear} is not leap year`);
}

// check day of week based on number given
let weekDay = 2;

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
    console.log("Friday happy day");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("None of them");
    break;
}


// arthmetic operation perform 
let number1 = 5;
let number2 = 15;
let operator = "Multiply";

switch(operator){
    case "Add":
      result = number1 + number2;
        console.log(`The Addition is ${result}`);
        break;
        case "Minus":
          result = number1 -number2;
          console.log(`The Minus is ${result}`);
          break;
          case "Divided":
             result = number1 / number2;
          console.log(`The Divided is ${result}`);
          break;
          case "Multiply":
             result = number1 * number2;
          console.log(`The Multiply is ${result}`);
          break;
          default:
            console.log("Out of them");
}