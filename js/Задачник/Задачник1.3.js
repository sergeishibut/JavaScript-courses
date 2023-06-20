"use strict";

let str = "forever";
if (str.length > 1) { //если строка длиннее одного
	let preLastChair = str.charAt(str.length - 2); //выводим предпоследний символ
	console.log(preLastChair);
}

let num = 546,
	num2 = 273;
if (num % num2 === 0) { //проверяем делится ли одно число на второе без остатка
	console.log("nice");
} else {
	console.log("error");
}