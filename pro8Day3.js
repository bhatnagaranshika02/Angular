




function mul(a,b){
	console.log(a*b)
}

function div (a,b){
	console.log(a/b)
}
module.exports.addition=mul
module.exports.addition = div

//or
 module.exports={
   addition:add,
   multiply:mul,
   division:div
 }