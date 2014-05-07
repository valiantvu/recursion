// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// You should use document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:
// document.body.childNodes[3].classList.contains("targetClassName") ---> true
var getElementsByClassName = function(className){
	var result = [];
	var element = arguments[1] ? arguments[1] : document;
	var children = element.childNodes;

	for (var i = 0; i < children.length; i++) {
		var child = children[i];

		if (child.classList != undefined) {
			
			if (child.classList.contains(className)){
				result.push(child);
			}
			if (child.hasChildNodes()) {
				Array.prototype.push.apply(result,getElementsByClassName(className, child));
			}	
		}
	}
	return result;
};
