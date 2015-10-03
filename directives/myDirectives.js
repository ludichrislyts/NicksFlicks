nicksFlicks.directive("changeClass", function(){
	return function (scope, element, attrs){
		element.bind("click", function(){
			var ele = document.getElementById("main");
			ele.addClass(attrs.changeClass);
		});
	}		
});