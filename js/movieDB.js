"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many movies you watched", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many movies you watched", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};




function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("not so many movies");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("you are love movies!");
	} else if (personalMovieDB.count > 30) {
		console.log("you are fanatic!");
	} else {
		console.log("error");
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}



showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`your best genre number ${i}`);
	}
}

writeYourGenres();


