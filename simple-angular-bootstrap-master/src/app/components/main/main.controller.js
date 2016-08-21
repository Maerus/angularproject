MyApp.controller("MainController", function($scope, $timeout) {
	firebase.database().ref('/chats/').on('value', function(snapshot){
		$timeout(function() {
			$scope.freshChats = snapshot.val();
		}, 0);
	});
})
