"use strict";



const personalMusicDB = {
	count: 0,
	song: {},
	singer: {},
	genres: {},
	privat: false,
	start: function() {
		personalMusicDB.count = +prompt("how many song you love?", "");
		while(personalMusicDB.count == "" || personalMusicDB.count == null || isNaN(personalMusicDB.count)) {
			personalMusicDB.count = +prompt("how many song you love?", "");
		}
	},
	rememberMySongs: function() {
		for(let i = 0; i < 2; i++) {
			const a = prompt("latest listen music?", "").trim(),
				  b = prompt("rate this song?","");
				  if(a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMusicDB.song[a] = b;
				console.log("done!");
				  } else {
				console.log("error");
				i--;
				  }
		}
	},
	detectPersonalLevel: function() {
		if (personalMusicDB.count < 10) {
			console.log("not so many songs!"); {}
		} else if (personalMusicDB >= 10 && personalMusicDB.count < 30) {
			console.log("you are love music");
		} else if (personalMusicDB > 30) {
			console.log("you are fan!");
		} else {
			console.log("error");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMusicDB);
		}
	},
	toggleVisibleMyDB: function() {
		if(personalMusicDB.privat) {
			personalMusicDB =false;
		} else {
			personalMusicDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for(let i = 1; i <= 3; i++) {
			let genre = prompt(`you best genre ${i}`);
			if (genre === "" || genre === null) {
				console.log("not correct");
				i--;
			} else {
				personalMusicDB.genres[i - 1] = genre;
			}
		}
		personalMusicDB.genres.forEach((item, i) => {
			console.log(`best genre ${i + 1} for you is ${item}`);
		});

	}


};

personalMusicDB.start();
personalMusicDB.rememberMySongs();
personalMusicDB.detectPersonalLevel();
personalMusicDB.showMyDB();
personalMusicDB.toggleVisibleMyDB();
personalMusicDB.writeYourGenres();