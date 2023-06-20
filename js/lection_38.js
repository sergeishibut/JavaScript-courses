"use strict";

const shoppingMallData = {
	shops: [
	    {
	        width: 10,
	        length: 5
	    },
	    {
	        width: 15,
	        length: 7
    	    },
    	{
    	    width: 20,
    	    length: 5
    	},
    	{
    	    width: 8,
    	    length: 10
    	}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let square = 0;
	let volume = 0;

	data.shops.forEach(shop => { //перебираем все элементы массива
		square += shop.width * shop.length;//вычисляем площадь и прибавляем значение к square
	});

	volume = data.height * square; //вычисляем общий обьём

	if(data.budget - (volume * data.moneyPer1m3) >= 0) {
		return "we can work";
	} else {
		return "we cant work";
	}
}

isBudgetEnough(shoppingMallData);