var length = prompt('What are is the length of the room');
var width = prompt('What is the width of the room');
var feet = length * width;
var metric = feet * .09290304;
area = feet;
if(typeof area === "number"){
	console.log(area);
}


