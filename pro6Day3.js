function fun1(){
	var ab = function(){
		var ab = function(){
			console.log("inside fun1")
		}
		return ab
	}
}
ob = fun1()
ob()