var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home',{
		url:"",
		views:{
			'header':{
				templateUrl: "partials/header.html",
			},
			'body':{
				templateUrl: "partials/home.html",
			},
		}
	});// end home state route
});// end config function