MyApp.controller("ChatController", function($scope, FirebaseService) {
	var chatParameter = 'TODOget_url_parameter/';
	FirebaseService.database.ref('/messages/' + chatParameter).on('value', function(snapshot){
		$scope.messages = snapshot.val();
		$scope.$apply();
	});
	
})