

module.exports = function child(){

//	return module.parent.filename;
	
	let _module = module;
	while(_module.parent){
		_module = module.parent;
	}

	return _module;

}
