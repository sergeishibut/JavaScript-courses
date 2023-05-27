const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
	
}
const res = convert(500, usdCurr);
promotion(res);


//1. В функцию мы передаем 2 аргумента. Не важно, как из назвать.

//2. Когда мы вызываем функцию, на место этих аргументов подставляются значения, т.е технически это называется неявное присваивание.

//3. Когда мы вызываем функцию, мы в круглые скобки передаем аргументы для параметров. Т.е первым у нас идет при вызове функции аргумент 500. Вот он как раз подставляется вместо amount. Внутри движок присваивает в amount = 500

//И такая операция выполняется в порядке очередности)



const Gel = 30;

function conv(cash, money) {
	console.log(cash - money);
}
conv(1000, Gel);



function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log("done");
}

test();


/* function sayHello(man, hi) {
	console.log(man , hi);
}
sayHello("Hello", "Sergey"); */

function sayHello(name) {
	return "hello," + name + "!";
}
var personName = "Иван";
var result = sayHello(personName);
console.log(result);

function sayHello(name) {
	return `Hello, ${name}!`;
}
sayHello("Sergey");

function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);


function getMathResult() {

}


