"use strict";






//У тебя есть специальная база данных для фильмов, которую ты назвал personalMovieDB. В ней хранится информация о количестве просмотренных фильмов, самих фильмах, актерах, жанрах и других свойствах.

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	//Есть функция start, которая запускается, чтобы начать работу с базой данных. Она спрашивает у пользователя сколько фильмов он посмотрел, и сохраняет это число в свойство count. Если пользователь вводит некорректные данные, например, пустую строку или нечисловое значение, функция будет продолжать запрашивать число, пока пользователь не введет корректные данные.
	start: function () {
		personalMovieDB.count = +prompt("How many movies you watched", "");
	
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How many movies you watched", "");
		}
	},
	//Есть функция rememberMyFilms, которая запрашивает у пользователя информацию о двух последних просмотренных фильмах. Она использует цикл for для повторения вопроса два раза. В каждой итерации цикла, она запрашивает название фильма и его оценку. Если пользователь вводит корректные данные (непустую строку и число символов меньше 50), информация о фильме сохраняется в объекте movies базы данных personalMovieDB.
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Latest watching movie?","").trim(),
				b = prompt("Rate this movie?","");
				  
		
			if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done!");
			}	else {
				console.log("error");
				i--;
			}
		}
	},
	//Функция detectPersonalLevel используется для определения уровня кинолюбительства пользователя на основе количества просмотренных фильмов. Она проверяет значение свойства count и выводит соответствующее сообщение в зависимости от количества фильмов.
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("not so many movies");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("you are love movies!");
		} else if (personalMovieDB.count > 30) {
			console.log("you are fanatic!");
		} else {
			console.log("error");
		}
	}, 
	//Функция showMyDB выводит содержимое базы данных personalMovieDB в консоль, если параметр hidden равен false. Если hidden равен true, то содержимое базы данных не выводится.
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	//Функция toggleVisibleMyDB используется для переключения режима приватности базы данных. Если свойство privat равно true, оно меняется на false, и наоборот.
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

	//Функция writeYourGenres запрашивает у пользователя три любимых жанра фильмов и сохраняет их в массиве genres базы данных personalMovieDB. Затем она выводит список этих жанров в консоль.
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`your best genre number ${i}`);

			if (genre === "" || genre === null) {
				console.log("incorrect data");
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}

		}
		
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`best genres ${i + 1} this ${item}`);
		});

	} 
	
	
};














