"use strict";

//HOMEWORK

console.log(NaN || 2 || undefined); 
//Оператор || (логическое ИЛИ) возвращает первое истинное значение или последнее ложное значение из списка операндов. В данном случае, операнды проверяются слева направо.NaN является ложным значением, поэтому проверка переходит к следующему операнду, который является числом 2. Число 2 является истинным значением, поэтому оператор || возвращает его без проверки остальных операндов.
console.log(NaN && 2 && undefined);
//Оператор && (логическое И) возвращает первое ложное значение или последнее истинное значение из списка операндов. В данном случае, первый операнд NaN является ложным значением в контексте логических операций. Поэтому оператор && возвращает это ложное значение NaN без проверки остальных операндов.
console.log(1 && 2 && 3); 
//3 потому что это последнее истинное значение
console.log(!1 && 2 || !3); 
//false В консоль будет выведено значение false.Выражение !1 возвращает логическое отрицание значения 1, что равно false. Далее, оператор && (логическое И) проверяет первый операнд и, если он является ложным, возвращает его значение без проверки остальных операндов. В данном случае, !1 равно false, поэтому оператор && возвращает false без проверки остальных операндов.Затем, оператор || (логическое ИЛИ) проверяет первый операнд false. Если первый операнд является ложным, то оператор || возвращает значение второго операнда без проверки остальных операндов. В данном случае, второй операнд 2 является истинным значением, поэтому оператор || возвращает 2 без проверки остальных операндов.
console.log(25 || null && !3); 
//В консоль будет выведено значение 25.Выражение 25 является первым операндом оператора || (логическое ИЛИ). При использовании оператора ||, если первый операнд является истинным значением, то он будет возвращен без проверки остальных операндов. В данном случае, 25 является истинным значением, поэтому оно будет выведено в консоль.Второй операнд null && !3 является выражением с использованием операторов && (логическое И) и ! (логическое отрицание). Оператор && возвращает первое ложное значение или последнее истинное значение из списка операндов. Оператор ! возвращает логическое отрицание значения.В данном случае, оператор && проверяет первый операнд null и, так как он является ложным значением, возвращает его без проверки остальных операндов. Таким образом, null будет результатом выражения null && !3.Поскольку оператор || уже вернул значение 25 без проверки второго операнда, выражение null && !3 не будет выполнено, и его результат не будет влиять на вывод в консоль.
console.log(NaN || null || !3 || undefined || 5); 
//В консоль будет выведено значение 5.Оператор || (логическое ИЛИ) возвращает первое истинное значение или последнее ложное значение из списка операндов. В данном случае, операнды последовательно проверяются слева направо.NaN является ложным значением, поэтому проверка переходит к следующему операнду, который является null. null также является ложным значением, поэтому проверка продолжается далее.Оператор ! (логическое отрицание) применяется к числу 3 и возвращает ложное значение false. Так как это уже последний операнд, и он является ложным, проверка продолжается.Следующий операнд undefined также является ложным значением, поэтому проверка продолжается.Наконец, операнд 5 является истинным значением. Поскольку это первое истинное значение, оператор || возвращает его.Таким образом, 5 будет выведено в консоль.
console.log(NaN || null && !3 && undefined || 5); 
//В консоль будет выведено значение 5.Оператор || (логическое ИЛИ) возвращает первое истинное значение или последнее ложное значение из списка операндов. Оператор && (логическое И) возвращает первое ложное значение или последнее истинное значение из списка операндов.В данном случае, операнды проверяются слева направо.NaN является ложным значением, поэтому проверка переходит к следующему операнду, который является null. Оператор && проверяет первый операнд null и, так как он является ложным, возвращает его без проверки остальных операндов. Таким образом, выражение null && !3 && undefined вернет null.Поскольку null является ложным значением, проверка продолжается. Далее, оператор || проверяет следующий операнд 5, который является истинным значением. Поскольку это первое истинное значение, оператор || возвращает его.Таким образом, 5 будет выведено в консоль.
console.log(5 === 5 && 3 > 1 || 5); 
//В консоль будет выведено значение true.Выражение 5 === 5 сравнивает два операнда и возвращает true, так как числа равны.Затем оператор && (логическое И) проверяет первый операнд true. Если первый операнд является ложным, оператор && возвращает его значение без проверки остальных операндов. В данном случае, первый операнд true, поэтому проверка продолжается.Далее, выражение 3 > 1 сравнивает два операнда и также возвращает true, так как условие истинно.Теперь оператор || (логическое ИЛИ) проверяет первый операнд true. Если первый операнд является истинным, оператор || возвращает его значение без проверки остальных операндов. В данном случае, первый операнд true, поэтому оператор || возвращает true.Таким образом, true будет выведено в консоль.



//ВЫПОЛНЯЕТСЯ ПОТОМУ ЧТО ОДНО ИЗ НИХ True
/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log("Done!");
} */


//ВЫПОЛНЯЕТСЯ ПОТОМУ ЧТО ОДНО ИЗ ЗНАЧЕНИЙ true, в данном случае это nuggets
/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
	console.log("Done!");
} */

//НЕ ВЫПОЛНЯЕТСЯ ПОТОМУ ЧТО ПРИ СРАВНЕНИИ ОБА ОКАЗАЛИСЬ НЕ True
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
	console.log("Done!");
}

let num = 10;
do {
	console.log(num);
	num++;
}
while (num < 15);

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}





/* let result = "";
const length = 7;

for (let i = 1; i < length; i++) {

	for(let j = 0; j < i; j++) {
		result += "*";
	}
		


	result += "\n";

/

console.log(result); */

let result = "";
const length = 7;

first: for (let i = 1; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}

console.log(result);
