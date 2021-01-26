
function factorial(n){
	if(!Number.isInteger(n) || n < 0){
		throw new Error(`n should be a positive integer, ${typeof(n)} passed`);
	}

	if(!n){
		return 1;
	}


	let _factorial = n;
	while(--n){
		_factorial *= n;
	}
	return _factorial;

}

console.log(factorial(0));
