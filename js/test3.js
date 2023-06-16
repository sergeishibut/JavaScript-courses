"use strict";

/* const str = "test"; */
/* const arr = [1, 2, 4]; */

/* console.log(str[2] = "d"); */

console.log(str.toLocaleUpperCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("m"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


//CALLBACK

function first() {
	//do smf
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`i learn: ${lang}`);
	callback();
}

function done() {
	console.log("i ready to job");
};

learnJS("JavaScript", done);






function first() {
	//do smf
	setTimeout(function() {
		console.log("р");
	}, 900);
	setTimeout(function() {
		console.log("о");
	}, 800);
	setTimeout(function() {
		console.log("д");
	}, 700);
	setTimeout(function() {
		console.log("и");
	}, 600);
	setTimeout(function() {
		console.log("п");
	}, 500);
}



function second() {
	console.log("ты");
}

first();
second();