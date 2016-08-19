MyApp.controller("MainController", function($scope, FirebaseService) {
	/*
	$scope.doStuff = function() {
		return "stuff";
	};
	*/
	
	FirebaseService.database.ref('/chats/').on('value', function(snapshot){
		$scope.freshChats = snapshot.val();
		$scope.$apply();
	});
	
	
})
