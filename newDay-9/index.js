// setTimeout
// setTimeout(() => {
//   console.log("Hello");  
// }, 4000);

// setIntervel execution one by one until clear it
// setInterval(() => {
//     console.log("i'm execute");
// }, 3000);


// clearInterval with setInterval 
// var counter = 0;
// const setId =  setInterval(() => {
//     // console.log("Welcome");
//     counter++;
//     console.log(counter," Counter");
//     if(counter == 4){
//         clearInterval(setId);
//         console.log("you'r counter is cleared");
//     }
// }, 2000);



// CALLBACK FUNCTION :- a callback function is an function that passed as a argument in another function and executed later in parent function
// function myfunction(callbackfunc){
//    setTimeout(() => {
//     console.log("inside the settimeOut");
//     callbackfunc();
//    }, 3000);
// }
// function callbackfunc(){
//     console.log("This is callback function");
// }
// myfunction(callbackfunc);


// PROMISES:- promise is return complite or reject of given task 
// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         let response = false;
//         if (response) {
//             resolve("Your promise successfully");
//         } else {
//             reject("Your promise failed");
//         }
//     }, 3000);
// });
// mypromise.then((msg) => { console.log(msg, "msg inside the then"); }).catch((msg) => { console.log(msg, "msg inside the catch"); }).finally(() => { console.log("Finally you'r promise completed"); })


// promise without async await method 
// function newFunc(){
// return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Project is completed");
//     }, 3000);
// });        
// }

// function anotherFunc(){
//    console.log("Before");
//    const result = newFunc();
//    console.log(result, "After");
// }
// anotherFunc();


// Promise with async await method
// function newFunc2(){
//    return new Promise((resolve, reject)=>{
//      setTimeout(() => {
//         resolve();
//      }, 3000);
//    });
// }

// async function another2(){
// console.log("Before");
// const result = await newFunc2().then((msg)=> {return "You'r project has completed"}).catch((error)=> {return "Error accured"});

// console.log(result, "After");
// }
// another2();


// Fetch api store from backend 
// fetch("https://fakestoreapi.com/products").then((response)=> response.json()).then((jsonversionResponse)=> {
//     console.log(jsonversionResponse);
// })



// Promises solve base in random number get success and failure
// function randomError(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//            let checkResult = Math.random() > 0.5;
           
//            if(checkResult){
//             resolve("Successfull");
//            }else {
//             reject("Error accurred!");
//            }
//         },3000);
//     })
// }
// randomError().then((msg)=>{console.log(msg, "msg");}).catch((error)=>{console.log(error, "show");});



// Promise.all([fetchUser(), fetchPosts()]) waits for both promises to complete.
// Why Use Promise.all?
// ✅ Waits for All Promises to Resolve:-
// Ensures that both user data and posts data are available before proceeding.

// function bothrun(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("user data here Yupp");
//         }, 2000);
//     });
// }
// function bothrun2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("user accepted all cookies");
//             // resolve("user accepted all cookies");
//         }, 1500);
//     })
// }
// Promise.all([bothrun(), bothrun2()]).then((msg)=> {console.log(msg,"msg");}).catch((error)=> {console.log(error,"error");})



// promise with async function
//  function myfunc() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },3000);
//     })
// }
// async function anotherone() {
//     console.log("before");
//     const result = await myfunc().then((msg)=> {return "project complete"}).catch((error)=>{return "Error shown"});
//     console.log(result, "After"); 
// }
// anotherone();


// promise with random number
// function checkRandom(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//              let statement = Math.random() > 0.5;
//              if(statement){
//                 resolve("positive number");
//              }else{
//                 reject("Negative number");
//              }
//         }, 3000);
//     })
// }
// checkRandom().then((msg)=>{console.log(msg, "msg");}).catch((error)=>{console.log(error, "accured");});


// for in loop with work on objec
// var newplace = {palao:"pacific ocean",member: 4,motorCar: "motorPump"};
// for(key in newplace){
//     console.log(key ,":", newplace[key]);
// }


// for of loop work on arrays
// let car = ["GTR","bantali","supra","mxlian"];
// for(element of car){
//     console.log(element);
// }


// hoc
function hocfunc(a, b, c){
 return c(a,b);
}
const newVar = (a,b)=> a +  b;
const newlet = (a,b)=> a - b;

console.log(hocfunc(40,5, newVar));
console.log(hocfunc(10,2, newlet));
