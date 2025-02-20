// Advance javaScript

//Error handling

// Try catch finally block 
// async function getData(){
// try{
//   const request = await axios('http//fakestoreapi.com/products');
//   console.log(request);
// }catch(error){
//  console.log(error);
// }finally{
//  console.log('Loading false');
// }
// }
// getData();



// Custome error handling
// async function errorCheck() {
//     try {
//         const res = await axios('http//fakestoreapi.com/products');
//         console.log(res);

//         if(res == "xyz"){
//             throw new Error('res is xyz');
//         }
//     } catch (error) {
//         console.log(error, 'for custome error throw use -> error.message');
//     }finally{
//         console.log("error done now");
//     }
// }
// errorCheck();


// 1. Closures
// a closure is function that remember it's lexical scope. even when it's executed outside the scope 
function outerFunc(){
    var outerVar = "Hey it's outer txt";

    function innerfunc(){
        console.log(outerVar);
    }
    return innerfunc;
}
var checkForAnotherVar = outerFunc();
checkForAnotherVar();


// 2. Hoisting
// with variable
// console.log(c);
// var a = 10;
// var b = 23;
// var c = a + b;

// with regular function 
call();

function call(){
    console.log("Hosting with function");
}


// This keyword in different context
// 1. this-> Global context 
// console.log(this);  //it refers window scope in browser.

// 2. this-> object method
const myobjec = {
 member : false,
 newMethod: function(){
    console.log(this.member);
 }
};
myobjec.newMethod();


// 3. this-> with arrow function
// const newArrow = () =>{
//      name: "player", 
//     console.log(this.name); //in thiscase it's refer global scope of page
// };
// newArrow();


// Currying function : a function that transformed sequence function and each take one argument and return function
function CurryingFunc(txt1){
      return function(txt2){
        return txt1 + txt2;
      }
}
const newBoth = CurryingFunc(8);
console.log(newBoth(10));


// call- method used for add another object data in current object 
const objData = {
    name : "Dilhi6",
    method1: function(age){
        console.log(this.name, age);
    }
}

// object 2 declare here for data add above object 
const object2 = {
    name : "bakri-bhai",
}
objData.method1.call(object2, "9xm");



// apply - method also work call but it used when we want to access multiple argument of object in array
const data = {
    location : "kerala",
    declaremethod: function(a, b,c){
        console.log(this.location, a, b, c);
    }
};

const data2 = {
    location : "karachi",
}
data.declaremethod.apply(data2, ["axy53@gmail.com", 88823464, "west-side"]);


// bind - method work like same above method but it's not declare without add it to another variable 
const bindData = {
    name: "john",
    greetMethod : function(parameter){
        console.log(this.name, parameter);
    }
};

const bindData2 = {
    name : "steve",
}
var varStore =  bindData.greetMethod.bind(bindData2, 24); //  if we check it in terminal nothing we will get without store it in variable
varStore();