nicksFlicks.factory('ReviewsFactory', function ReviewsFactory(){
	var factory = {};
	var staticReviews = [{id: 1, title:"Galaxy Quest is dope", text:"Galaxy Quest is super dope and will always be super dope"},
											{title:"Night at the Roxbury is dope", text:"Night at the Roxbury is super dooper dope and will always be super dooper dope", id: 2},
											{title:"Mystery Men is dope", text:"Mystery Men is magnificently dope and will always be magnificently dope", id: 3}];
	factory.reviews = staticReviews;
	
	factory.addReview = function(){
		factory.reviews.push({title: factory.reviewTitle,
													text: factory.reviewText,
													id: factory.reviews.length + 1
												});
		factory.reviewTitle = null;
		factory.reviewText = null;
	};
	return factory;
	
})