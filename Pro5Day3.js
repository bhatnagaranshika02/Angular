var x = 45;
var y = 12;
console.log(x+y);

function fun(){
	console.log("fun1")
}
fun()
console.log(typeof x)
console.log(typeof fun)
var hello = fun1
hello()

var fun2 = function()
{
	console.log("fun2")
}
fun2()

function test(abcd){
	console.log("testing")
	abcd()

}
test(fun1)
//or 
test(function() //anonymous
{
	console.log("hello code")
})