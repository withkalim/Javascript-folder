// 1. Iterators
// An iterator is an object that provides a sequence of values and has a next() method that returns the next value in the sequence.

// function createFunc(array){
//     let index = 0;
//   return {
//         next: function(){
//             if(index < array.length){
//                 return {value: array[index++], done: false};
//             }else {
//                 return {done : true};
//             }
//         }
//   }
// }
// let newFunc = createFunc(["maharashtra", "manali","maxsico"]);
// console.log(newFunc.next());
// console.log(newFunc.next());
// console.log(newFunc.next());



// 2. same function call with Generators.
// A generator is a special kind of function that can be paused and resumed, using the yield keyword.
// function* myGenerators(){
//     yield "supra";
//     yield "pagani";
//     yield "mustang";
//     yield "gtr";
// }
// let storeInVar = myGenerators();
// console.log(storeInVar.next());
// console.log(storeInVar.next());


// weakmap and weakset 
// const obj = {
//     name : "maharaja",
// }
// var newobj = new WeakMap();
// newobj.set(obj, "Tadda see it's new txt");
// console.log(newobj.get(obj));


// test console.table on object and array data in table format
// let newData = {
//     name: "maherbaan",
//     location: "Baykalla",
//     member : 2017,
//     betch: "Oct new",
// }
// console.table(newData);



function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = args.toString();
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Calculating result:", key);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const slowFunc = (n)=> {
    console.log("Calculating....");
    return n * 2;
}
const faseFunc = memoize(slowFunc);

console.log(faseFunc(3));
console.log(faseFunc(8));
