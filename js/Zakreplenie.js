"use strict";

const options = {
	name: "test",
	width: "1024",
	height: "1080",
	colors: {
		border: "black",
		bg: "red"
	}
};

for(let key in options) {
	if (typeof options[key] === "object") {
		console.log(`svoistvo ${key}:`);
		for (let inKey in options[key]) {
			console.log(`vlojennoe svoistvo ${inKey} imeet zna4enie ${options[key][inKey]}`);
		}
	} else {
		console.log(`svoistvo ${key} imeet zna4enie ${options[key]} `);
	}
	
};

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
    	languages: ["ru", "eng"],
    	programmingLangs: {
    	    js: "20%",
    	    php: "10%"
    	},
    	exp: "1 month"
	}
};

function showExpiriense(personalPlan) {
	if(personalPlan.skills && personalPlan.skills.exp) {
		return "expiriense :" + personalPlan.skills.exp ;
	} else {
		return "expiriense zero";
	}
}
const expTest = showExpiriense(personalPlanPeter);
console.log(expTest);



/* for (let keys in personalPlanPeter) {
	if (typeof personalPlanPeter[keys] === "object") {
		console.log(`svoistvo ${keys} :`);

		for (let insKey in personalPlanPeter[keys]) {
			console.log(`${insKey} imeet zna4enie ${personalPlanPeter[keys][insKey]}`);
		}

		if (typeof personalPlanPeter[keys][nestedKey] === "object") {
			for (let nestedKey in personalPlanPeter[keys][insKey]) {
				console.log(`${nestedKey} imeet zna4enie ${personalPlanPeter[keys][insKey][nestedKey]}`);
			}
		}
		
	} else {
		console.log(`${keys} imeet zna4enie ${personalPlanPeter[keys]}`);
	}
} */
	