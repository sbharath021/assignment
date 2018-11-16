
// question 10 gross salary
var calcSalary = function (basciSalary){
	let bs = basciSalary;
	var hra = 0;
	var da = 0;
	var grossSalary = 0;
	if(bs < 1500){ // check whether the basic salary is fewer than 1500 or not if true
		hra = bs * 0.1;
		da =  bs * 0.9;
		grossSalary = bs + hra + da;
		console.log("gross salary is "+grossSalary);
	}else{ // if not 
		hra = 500;
		da = 0.98 * bs;
		grossSalary = bs + hra + da;
		console.log("gross salary is "+grossSalary);
	}
}
calcSalary(14999);// pass the basic salary

// question 11 reversing a number
var reverseANumber = function(num){
	let str = num.toString();//convert the no to string
	let numArr = str.split('');// split the string and store them in an array
	let revNum = numArr.reverse();// reverse the contents of the arrray
	let number = revNum.join('');// join the elements of the array to form a string
	console.log(parseInt(number));// convert the string to number
}
reverseANumber(156900);

//question 12 finding the square root
var calculateSqrt = function(num){
	console.log(Math.floor(Math.sqrt(num)));// find the square root of the number and round it of to the nearest lower number
}

calculateSqrt(16);