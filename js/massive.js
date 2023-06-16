"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}
/* arr.pop(); */ //убирает последний элемент
/* arr.push(10); */ //добавляет в конец массива

/* console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} */

/* arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} inside massive ${arr}`);
});


for (let value of arr) {
	console.log(value);
} */


/* const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); */