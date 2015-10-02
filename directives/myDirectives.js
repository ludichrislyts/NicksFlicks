nicksFlicks.directive("toggleBool", function(){
	return function (scope, element, attrs){
		element.bind("click", function(){
			if(element == true){element = false;}
			else{element = true;}
		});
	}		
});