/**
 * 
 */
require('./common.css');
//var hello = require('./hello'); 
//var world = require('./world');

var userObject = require('./object');

//document.write(`${hello}, ${world}!`);

var tico = new userObject.Vehicle('tico', 50);
//console.dir(tico);
tico.drive(); // 'tico runs at 50'
var sonata = new userObject.Sedan('sonata', 100, 200);
//console.dir(sonata);
sonata.drive(); // 'sonata runs at 100'
sonata.boost(); // 'sonata boosts its speed at 200'

sonata._name = "ddd";
//private 가시성을 주지는 못함. 다만 암묵적인 규칙이라구 ㅠㅠ

sonata.drive(); // 'ddd runs at 100'
sonata.boost(); // 'ddd boosts its speed at 200'

//console.dir(Object.getPrototypeOf(tico));
//console.dir(Object.getPrototypeOf(sonata));

// console.log(sonata.staticMethod());
//Type Error sonata.staticMethod() is not a function;
console.log(userObject.Sedan.staticMethod());
console.log(userObject.Vehicle.staticMethod());


var stack = new userObject.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());