

var calcSalary = function (basciSalary){
	let bs = basciSalary;
	var hra = 0;
	var da = 0;
	var grossSalary = 0;
	if(bs < 1500){
		hra = bs * 0.1;
		da =  bs * 0.9;
		grossSalary = bs + hra + da;
		console.log("gross salary is "+grossSalary);
	}else{
		hra = 500;
		da = 0.98 * bs;
		grossSalary = bs + hra + da;
		console.log("gross salary is "+grossSalary);
	}
}
calcSalary(14999);


var reverseANumber = function(num){
	let str = num.toString();
	let numArr = str.split('');
	let revNum = numArr.reverse();
	let number = revNum.join('');
	console.log(parseInt(number));
}
reverseANumber(156900);


var calculateSqrt = function(num){
	console.log(Math.floor(Math.sqrt(num)));
}

calculateSqrt(16);