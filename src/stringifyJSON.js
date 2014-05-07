// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (typeof obj == "string"){
		return obj;
	}
	else if (obj instanceof Array){
		var stringObj = "";
		for (var i = 0; i < obj.length; i++){
			var val = obj[i];
			var comma = i == obj.length - 1 ? "" : ",";

			if (val instanceof Array){
				val = stringifyJSON(val);
				stringObj += val + comma;
			}
			else if (typeof val == "string") {
				stringObj += "'" + val + "'" + comma;
			}
			else if (typeof val == "object"){
				val = stringifyJSON(val);
			}
			else {
				stringObj += val + comma;
			}
		}
		return "[" + stringObj + "]" + (comma === undefined ? "" : comma);
	}
	else if (typeof obj == "object"){
		var stringObj = "";
		for (var key in obj){
			var val = obj[key];
			if (typeof val == "object"){
				val = stringifyJSON(val);
			}
			stringObj += "'" + key + "':" + val + ",";
		}
		return String("{" + stringObj.slice(0, -1) + "}");	
	}
	else {
		return obj;
	}
}
