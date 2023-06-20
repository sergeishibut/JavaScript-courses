"use strict";

let num = 10;
if (num < 0) {
	console.log("error");
} else {
	console.log("good work"); //проверяем отрицательное число или нет
}

let str = "forever";
console.log(str.length); //узнаём длинну строки

let stri = "amazing";
let lastStr = stri[stri.length - 1]; //выводим последний символ строки
console.log(lastStr);

let word_3 = "Шаль";
let lastWord_3 = word_3[word_3.length - 1];
if (lastWord_3 === "ь") {
	let lastWord_4 = word_3[word_3.length - 2]; //проверяем последний символ и если он /ь/ то выводим предпоследний
	console.log(lastWord_4);
} else {
	console.log(lastWord_3);
}


let a = 14;
if (a % 2 === 0) {
	console.log("chetnoe");
} else {
	console.log("nechetnoe"); //проверяем четное или нечетное число
}

let word = "luck",
	word_2 = "love";
let firstChair = word[0];
let firstChair_2 = word_2[0];
if (firstChair === firstChair_2) { //сравниваем первые буквы в словах
	console.log("identical");
} else {
	console.log("error");
}





