var length = prompt('What are is the length of the room');
var width = prompt('What is the width of the room');
var feet = length * width;
var metric = feet * .09290304;
var areaFt = feet;
var areaM = metric;
var area = areaFt + ' ' + 'square feet' + ' '+ areaM + ' ' + 'meters';

if(typeof areaFt === "number"){
	console.log(area);
}


