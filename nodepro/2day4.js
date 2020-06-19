var x=10
function fun1(){
	for(var x=1;x<6;x++){
		console.log("hello")

	}
	console.log(x) //6 coz its x is for function not for loop. so we use let keyword.



}

var x=10
function fun1(){
	for(let x=1;x<6;x++){
		console.log("hello",x) //x=1,2,3,4,5,6

	}
	console.log(x)//100


}