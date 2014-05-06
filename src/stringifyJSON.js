// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var stringObj = "{";
	for (var key in obj){
		stringObj += "'" + key + "': " + obj[key] + ",";
	}
	return stringObj.slice(0, -1) + "}";
}
