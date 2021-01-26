/*
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
*/
//console.log(factorial(0));


const a = ['a','l','o','h'];

function permutaciones(inputArr){
	const _permutations = [];

	const permute = (arr, permutation=[]) => {

		if(!arr.length){
			_permutations.push(permutation);
			return;
		}
		for(let i in arr){
			let curr = arr.slice();
			let next = curr.splice(i,1);

			permute(curr, permutation.concat(next));

		}
	
	}

	permute(inputArr);

	return _permutations;
	
}

console.log(permutaciones(a).length);



