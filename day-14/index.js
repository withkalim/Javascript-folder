// Objects
var myObject = {
    name: "user",
    myArray: [10, 20, 30, 40, 50],
    location: "Thane",
    age: 20,
}
console.log("myObject", myObject);
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");

// we can get inside object key and value by use two mathod
// console.log(myObject.name);

// and second one used with when we need space required
// console.log(myObject["location"]);


// we can add new object with value by used object constructer method
var newObject = new Object()
newObject.myinsitute = "Awdiz",
    newObject.locations = "Vashi"

console.log(newObject);
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");


// add new value in object
var newObject = new Object()
newObject.myinsitute = "Awdiz",
    newObject.locations = "Vashi"

newObject.favFood = "Apple";
console.log(newObject);
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");

// check property is present or not
console.log("locations" in newObject);


// delete the property of object
// delete newObject.myinsitute;
// console.log(newObject);


// object with loop
for (key in newObject) {
    console.log(key + " = " + newObject[key]);
}
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");


// A function inside the object
var myObject = {
    name: "user",
    location: "Thane",
    age: function () {
        console.log(20);
        console.log(this.location);
    }
}
console.log(myObject.age());
console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");

 // To get value by used D-Structure
const { name, location } = myObject;
console.log(name, location);



var testObj = {
    name: "srk",
    age: 59,
    location: function(){
        console.log("mumbai bandraa");
        console.log(this.name,  " Mannnat");
    }
}
console.log(testObj.location);