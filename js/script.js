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



/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

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

console.log(personalMovieDB); */

/* if (4 == 9) {
	console.log("ok!");
} else {
	console.log("error");
} */

/* const num = 50;

if (num < 49) {
	console.log("error");
} else if (num > 100) {
	console.log("many");
} else {
	console.log("ok!");
} */

//УСЛОВИЯ

/* (num === 50) ? console.log("ok!") : console.log("error");

const num = 50;

switch (num) {
case 49:
	console.log("Wrong");
	break;
case 100:
	console.log("Wrong");
	break;
case 100:
	console.log("Wrong");
	break;
case 51:
	console.log("right");
	break;	
default:
	console.log("not this time");
	break;
} */


/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
	console.log("not hungry");
} */

/* console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "dsfdfsfs");

console.log((hamburger && fries));

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log("all eat");
} else {
	console.log("go away");
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0); */

/* let num = 50; */

/* while (num <= 55) {
	console.log(num);
	num++;
} */

/* do {
	console.log(num);
	num++;
}
while (num < 55); */





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
		  

	if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done!");
	}	else {
		console.log("error");
		i--;
	}
}

/* let i = 0;
while (i < 2) {
	const a = prompt("Latest watching movie?",""),
		  b = prompt("Rate this movie?","");
	if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done!");
		i++;
		  } else {
		console.log("error");
		
		  }
} */

/* let i = 0;
do {
	const a = prompt("Latest watching movie?",""),
		  b = prompt("Rate this movie?","");

	if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
 		personalMovieDB.movies[a] = b;
		console.log("done!");
		i++;
		  } else {
		console.log("error");
		
		  }
}
while (i < 2); */


 

//Пользователю задается вопрос с помощью prompt: "How many movies you watched?". Введенное значение преобразуется в число и сохраняется в переменную numberOfFilms.Создается объект personalMovieDB со следующими свойствами:count:количество фильмов, присваивается значение переменной numberOfFilms.movies:пустой объект, который будет использоваться для хранения информации о фильмах.actors: пустой объект, который будет использоваться для хранения информации об актерах.genres: пустой массив, который будет использоваться для хранения информации о жанрах фильмов.privat: логическое значение false, указывающее на то, что база данных фильмов не является приватной.Инициализируется переменная i со значением 0 (let i = 0;), которая будет служить счетчиком для контроля количества итераций цикла.Выполняется цикл do...while, который выполняется, пока значение i меньше 2. Это гарантирует, что пользователь сможет ввести информацию о 2-х фильмах.Внутри цикла функция prompt используется для задания пользователю двух вопросов: "Latest watching movie?" и "Rate this movie?". Введенные значения сохраняются в переменных a и b соответственно.С помощью условия if проверяется, что значения a и b не являются null, пустыми строками (""), и длина строки a не превышает 50 символов (a.length < 50).Если условие выполняется, то значение b записывается в объект personalMovieDB.movies с ключом, равным значению a. Кроме того, выводится сообщение "done!", и переменная i увеличивается на 1 (i++).Если условие внутри цикла do...while не выполняется (например, если пользователь ввел некорректные данные), то выводится сообщение "error".После завершения цикла проверяется значение personalMovieDB.count:Если значение меньше 10, выводится сообщение "not so many movies".Если значение больше или равно 10 и меньше 30, выводится сообщение "you are love movies!".Если значение больше 30, выводится сообщение "you are fanatic!".Если ни одно из условий не выполняется, выводится сообщение "error".В конце кода выводится содержимое объекта personalMovieDB с помощью `console.log