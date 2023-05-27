for (let i = 5; i < 11; i++) {
	if (i === 11) {
		break;
		/* continue; */
	}
	console.log(i);
}

for (let j = 20; j >= 10; j--) {
	if (j === 13) {
    	break;
	}
	console.log(j);
}

let i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

for (let i = 1; i <= 10;) {
	if (i % 2 === 0) {
		console.log(i);
	}
	i++;
}

let i = 2;
while (i <= 16) {
	if (i % 2 === 0) {
		
	
		console.log(i);
	}
	i++;
}
let i = 2;
while (i <= 16) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

function fifthTask() 
	const arrayOfNumbers = [];

for (let i = 5;i < 11; i++) {
	arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

function fifthTask(a,b) {
 
	const arrayOfNumbers = [];
   
	for(let i = a; i <= b; i++) {
		arrayOfNumbers[arrayOfNumbers.length] = i;
	}
	return arrayOfNumbers;
  }
   
  console.log(fifthTask(7, 10));