var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider){
	// home page, provides entry to site
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
	// reviews state, lists review titles on left
	$stateProvider.state('reviews',{
		url:"/reviews",
		views:{
			'header':{
				templateUrl: "partials/header.html",
			},
			'body':{
				templateUrl: "partials/reviews.html",
				controller: "ReviewsCtrl",
			},
		}
	});// end reviews route
	
	$stateProvider.state('reviewPage', {
		url:"/:reviewId",
		views:{
			'header':{
				templateUrl: "partials/header.html",
			},
			'body':{
				templateUrl: "partials/review.html",
				controller: "ReviewsCtrl",
			},
		}
	});// end reviews route
	
	// $stateProvider.state('reviewPage',{
	// 	url:"/:reviews/reviewId",
	// 	views:{
			
	// 	}
	// })

});// end config function