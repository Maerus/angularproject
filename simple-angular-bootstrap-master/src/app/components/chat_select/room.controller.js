MyApp.controller("RoomController", function($scope, $timeout) {
	$scope.username = user.getName();
	$scope.$watch('username', function() {
		user.setName($scope.username);
    });
	
	$scope.enterChat = function(event){
		if(event.key == "Enter"){
			window.location.href = "#/chat/"+$scope.chatroom;
		}
	}
})
