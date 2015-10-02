var app = angular.module('newToAngular', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.posts = [];

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') return;
		$scope.posts.push({
			title: $scope.title,
			votes: 0,
			link: $scope.link
		});
		$scope.title = "";
		$scope.link = "";
	};

	$scope.incUpvotes = function(post){
		post.votes += 1;
	};
	
}]);
