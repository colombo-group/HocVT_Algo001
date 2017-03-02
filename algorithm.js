var input  = [2,3,5,13,65,7,23,56,4];
var expectedOutput = [{result:51,max:56,min:4}];

var result = function findMaxDistance(input)
{
	if(!input.length>=1) return false;
	let min = max =input.shift();
	for(var next of input)
	{
		if(next>=max) max = value;
		else break;
	}
	var diff = max-min;
	return [{result:diff,max:max,min:min}];
}

console.log(result(input));