MyApp.controller("ChatController", function($scope, $stateParams, $timeout) {
	if($stateParams){
		$scope.chatName = $stateParams.chatName;
		if($scope.chatName != ""){
			firebase.database().ref('/messages/' + $scope.chatName).on('value', function(snapshot){
				$timeout(function() {
					$scope.messages = snapshot.val();
				}, 0);
			});
		}
	}
	
	
	
	$scope.sendMessage = function(){
		//console.log("user: "+ $scope.username + "  msg: " + $scope.chatmessage + "  time: " + Date.now());
		if($scope.chatName != ""){
			var timestamp = Date.now();
			firebase.database().ref('/messages/' + $scope.chatName).push({
				member: $scope.username,
				message: $scope.chatmessage,
				timestamp: timestamp
			});
			firebase.database().ref('/chats/' + $scope.chatName).set({
				lastMessage: $scope.chatmessage,
				messager: $scope.username,
				timestamp: timestamp
			});
		}
		
	}
})