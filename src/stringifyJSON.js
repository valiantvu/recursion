// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var stringObj = "";

	if (typeof obj == "string"){
		stringObj += "\"" + obj + "\"";
	}
	else if (obj instanceof Array){
		for (var i = 0; i < obj.length; i++){
			var val = obj[i];
			var comma = i == obj.length - 1 ? "" : ",";

			val = stringifyJSON(val);
			stringObj += val + comma;
		}
		return "[" + stringObj + "]" + (comma === undefined ? "" : comma);
	}
	else if (typeof obj == "function" || typeof obj == "undefined"){
	}
	else if (obj == null){
		stringObj += null;
	}
	else if (typeof obj == "object"){
		var stringObj = "";
		for (var key in obj){	
			val = stringifyJSON(obj[key]);
			if (val){
				stringObj += "\"" + key + "\":" + val + ",";
			}
		}
		return "{" + stringObj.slice(0, -1) + "}";	
	}
	else {
		stringObj += obj;
	}
	return stringObj;
}
