"use strict";

/* "use strict";

const persone = "Alex";
console.log(persone);

const number = 5;

const bool = false;

const obj = {
	name: "John",
	age: 25,
	isMarried: false
};
console.log(obj.isMarried);



const arr = ["a", "b", "c"];
arr[10] = 1345;
console.log(arr);

const arrObj = {
	0: "a",
	1: "b",
	2: "c",
	abc: {
		def: {

		}
	}
};

const b = "b";

arrObj.b = "1234";

console.log(arrObj["b"]);

const storeName = "Dikies";
const storeDescription = {
	budget: 10000,
	employees: ["mark", "tony", "steve"],
	products: {
		meat: 20,
		weed: 40
	},
	open: true
};
console.log(storeDescription);

alert("Hello");

const result = confirm("are you here?");
console.log(result);

const answer = +prompt("are you 18", "18");
console.log(answer + 5);

const answeres = [];
answeres[0] = prompt("ваше имя?", ""),
answeres[1] = prompt("ваше фамилия?", ""),
answeres[2] = prompt("ваш возраст?", "");

console.log(typeof(answeres));

const category = "toys";
console.log(`https://someurl.com${category}/5`);

const user = "Ivan";
alert(`hello,${user}`);

let incr = 10,
	decr = 10;
incr++;
decr--;
console.log(incr++);
console.log(decr--);

console.log(2 + 2 *2 );

const isChecked = false,
	isClose = false;
console.log(isChecked || !isClose); */



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Latest watching movie?",""),
	  b = prompt("Rate this movie?",""),
	  c = prompt("Latest watching movie?",""),
	  d = prompt("Rate this movie?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
