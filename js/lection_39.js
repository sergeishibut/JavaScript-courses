"use strict";

//to String

//1)

console.log(typeof(String(null)));
console.log(typeof(String(454)));

//2)

console.log(typeof(5 + ""));

//to Number

//1)

console.log(typeof(Number(null)));

//2)

console.log(typeof(+"5"));

//3)

console.log(typeof(parseInt("15px", 10)));

//to boolean

0, "", null, undefined, NaN; //false

//1)

let switcher = null;
if (switcher) {
	console.log("working...");
}
switcher = 1;
if (switcher) {
	console.log("working...");
}

//2)

console.log(typeof(Boolean(454)));

//3)

console.log(typeof(!!"42242"));