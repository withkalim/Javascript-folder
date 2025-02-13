
// Print message after 3 second gap
setTimeout(() => {

    // here we can write message that we wan to show
    console.log("Good Evening Buddy");
}, 5000);



// setInterval use for repeat excusion of code
setInterval( () => {

    console.log("This is setInterval....");
}, 4000);



// clearInterval() prevent excusion of code
var count = 0;
var setId =  setInterval( () => {
    count++;
console.log(count);

// for clearInterval we need add var id to setInterval for clear it
if(count > 6){
    clearInterval(setId);
    console.log("setInterval cleared.");
}
},3000);



// for clearInterval practice
var count = 0;
var setId =  setInterval(()=> {
    count++;
    console.log(count);

    if(count > 6){
        clearInterval(setId);
        console.log("Id is cleared")
    }
}, 3000);





//  ======>(doubt)
// var output = "This is set interval";
// var id = setInterval( clearInterval() => {
    
// console.log(output);

// if(output > 5){
//     clearInterval(id);
//     console.log("setInterval is cleared.");
// }
// },2000);