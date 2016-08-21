MyApp.controller("RoomController", function($scope, $timeout) {
	$scope.username = user.getName();
	$scope.$watch('username', function() {
		user.setName($scope.username);
    });
})
