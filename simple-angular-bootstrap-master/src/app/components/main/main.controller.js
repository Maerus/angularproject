MyApp.controller("MainController", function($scope, $timeout) {
	firebase.database().ref('/chats/').on('value', function(snapshot){
		$timeout(function() {
			var objects = snapshot.val();
			array = [];
			for (var key in objects){
				var o = {};
				o.channel = key;
				o.timestamp = objects[key].timestamp;
				o.lastMessage = objects[key].lastMessage;
				o.messager = objects[key].messager;
				array.push(o);
			}
			array.sort(function(a, b){return b.timestamp-a.timestamp})
			$scope.freshChats = array.slice(0, 20)
		}, 0);
	});
})
