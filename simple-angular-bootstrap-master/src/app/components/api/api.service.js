var user = {};
user.userName = "";
user.setName = function(name){
	this.userName = name;
}
user.getName = function(){
	return this.userName;
}