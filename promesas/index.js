function getUser(){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				username: 'mike'
			})
		
		},3000);
	
	})
	}










// Promises
/*
getUser().
	then(user => console.log(user)).
	catch(err => console.error(err));


// Async/Await

async function main(){
	try{
	const user = await getUser();
	console.log('user', user);
	}catch(error){
		console.error(error);
	}
	
}

main();
main();
*/

/* 
(async () => {

	const user = await getUser();
	console.log(user);
})();

*/

// Don't do this

async function main(){
	const ids = [1,2,3,4,5];
//	const users = [];
	const promises = [];

	for(let id of ids){
		console.log(id);
	try{
	      promises.push( getUser());

	}catch(error){
		console.error(error);
	}

	}

	const users = await Promise.all(promises);
//	console.log(users);
	return users;
	
}



main().
	then(console.log);





