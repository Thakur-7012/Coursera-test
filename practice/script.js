var x="Hello World!";
console.log("basic :"+x); 

var a = function () {
	var x="inside a";
	console.log("trial 1 ="+x);
	b();
}

function b() {
	console.log("trial 2 ="+x);
}
a();