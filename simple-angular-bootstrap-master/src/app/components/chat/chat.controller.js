MyApp.controller("ChatController", function($scope, $stateParams, $timeout) {
	if($stateParams){
		$scope.chatName = $stateParams.chatName;
		if($scope.chatName != ""){
			firebase.database().ref('/messages/' + $scope.chatName).on('value', function(snapshot){
				$timeout(function() {
					$scope.messages = snapshot.val();
					$scope.updateScroll();
				}, 0);
			});
		}
	}
	$scope.chatmessage = "";
	$scope.username = user.getName();
	$scope.$watch('username', function() {
		user.setName($scope.username);
		if($scope.chatmessage.length > 0 && $scope.username.length > 1){
			document.getElementById("send").disabled = false;
		} else {
			document.getElementById("send").disabled = true;
		}
    });
	$scope.$watch('chatmessage', function() {
		if($scope.chatmessage.length > 0 && $scope.username.length > 1){
			document.getElementById("send").disabled = false;
		} else {
			document.getElementById("send").disabled = true;
		}
	});
	$scope.$watch('messages', function(){
		$scope.updateScroll();
	});
	
	$("#message").focus();
	
	$scope.sendMessage = function(){
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
		$scope.chatmessage = "";
		$("#message").focus();
	}
	
	$scope.enterToSend = function(event){
		if(event.key == "Enter" && !document.getElementById("send").disabled){
			$scope.sendMessage();
		}
	}
	
	var chatmessageHeight = 50; 
	//26 oikea koko atm, en saa jostain syystä kaivettua sitä documentista mutta eipähän hajoa
	
	$scope.updateScroll = function(){
		var height = Object.keys($scope.messages).length * chatmessageHeight;
		$("#chatbox").animate({scrollTop: height});
	}
})