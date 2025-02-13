// Bind() work for add or attach the objects property with new property of object
var module = {
  name: "user",
  greet: function () {
    return this.name;
  },
};
var newBound = module.greet;
console.log(newBound());
// undefined show

var boundGreet = newBound.bind(module);
console.log(boundGreet());

// DOM for handle innerHtml tags
