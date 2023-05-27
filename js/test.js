"use strict";

/* function firstTask() {
	// Пишем решение вот тут
	for (let i = 2; i <= 10 ; i +=2) {
    	console.log(i);
	}
    
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;
while (i <= 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}

let result = "";
const length = 7;
for (let i = 1; i < length; i++) {
	for(let j = 0; j < i; j++) {
		result += "*";
	}

	result += "\n";
}
console.log(result); */

const numberOfFilms = +prompt("How many movies you watched", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


for (let i = 0; i < 2; i++) {
	const a = prompt("Latest watching movie?",""),
		  b = prompt("Rate this movie?","");
		  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);



let num =20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 50;


	return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
	console.log("Hello");
};

logger();


const calc = (a, b) => {
	console.log("1");
	return a + b;
};