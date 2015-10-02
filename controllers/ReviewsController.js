nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory){
	//setting up scope variables
	$scope.factory = ReviewsFactory;
	$scope.reviews = ReviewsFactory.reviews;
	// $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.item);
	

	$scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);

	
	// variable to toggle show individual review
	//$scope.showReview = false; // initial value false;
	
	
});