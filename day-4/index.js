// A function provide funcianality 
// We can write multiple line code inside the function and return it

// check call without function name  
function call(){
    console.log("Inside the function");
}
console.log("Outside the function");


// function with substriction operators
function run4() {
     var nums1 = 10;
     var nums2 = 5;
     console.log("The substriction is " , 10 - 5);
}
run4();


// function with if else condition
function run(){
     var num1 = 59;
     var num2 = 45;
     if (num1 < num2) {
          console.log(num1 + " Is less then " + num2);
     }else {
          console.log(num1 + " Is greater then " + num2);
     }
}
run();

//  propt(parameters) with function  
function numbers(num3, num4){
     console.log(num3,num4);  
}
numbers(100, 200);


// function with undefine value
function run2(text1 , text2){
   console.log(text1, text2)
}
run2();  // here we not declare value that why it's thrown (undefine)



// function with return method
var car1 = "mustang";
// var car2 = "contica";
function run3(value1) {
     
     return value1; // excusion stop
    console.log("After return 1"); //none of any inside function console will excuted after return
    console.log("After return 2")
    console.log("After return 3")
    console.log("After return 4")
    console.log("After return 5")

}
var result = run3(car1);
console.log(result);