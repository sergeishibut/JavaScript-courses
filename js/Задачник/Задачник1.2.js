"use strict";

let num = 457;
if (typeof num === "number") {
	let numString = num.toString(); //методом преобразования в строку
	let firstChair = numString[0];	//выводим первую цифру из числа
	console.log(firstChair);
}

let numb = 783;
if (typeof numb === "number") {
	let numbString = numb.toString(); //меняем число на строку
	let lastChair = numbString[numbString.length - 1]; //выводим последний символ
	console.log(lastChair);
}

let number = 3567;
if (typeof number === "number") {
	let numberString = number.toString(); //делаем число строкой и потом обратно
	let lastNum = parseInt(numberString[numberString.length - 1]);
	let firstNum = parseInt(numberString[0]);
	console.log(lastNum + firstNum);
}

let nom = 567;
if (typeof nom === "number") {
	let nomString = nom.toString(); //узнаём количество цифр в числе делая его строкой
	console.log(nomString.length);
}

let first = 558,
	second = 970;
let firstString = first.toString(); //делаем числа строками
let	secondString = second.toString(); 
if (firstString.charAt(0) === secondString.charAt(0)) {//проверяем первый символ
	console.log("первые цифры одинаковые");
} else {
	console.log("разные");
}