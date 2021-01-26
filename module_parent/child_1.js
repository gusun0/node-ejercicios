const child2 = require('./child_2');

function child(){
//	return module.parent;
	return child2();
}

if(module.parent){
 module.exports = child;
}else{
	console.log(child());
}
