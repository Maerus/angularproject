/*
MyApp.service("ApiService", function() {

  this.syncMethod = function() {
    return 0;
  }

  this.getThings = function() {
    return $http.get("/thing")
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.error("Error ApiService getThings ", err);
        return {};
      })
  }

})
MyApp.service("FirebaseService", function() {
	
	this.database = firebase.database();
	
	this.writeChat = function(chatId, chatName, lastMessage, timestamp){
		this.database.ref('chats/' + chatId).set({
			name: chatName,
			lastMessage: lastMessage,
			timestamp: timestamp
		})
	};
	
	this.writeMember = function(chatId, memberName){
		this.database.ref('members/' + chatId + '/' + memberName).set(true);
	};
	
	this.writeMessage = function(chatId, message, member, timestamp){
		this.database.ref('messages/' + chatId).push({
			member: member,
			message: message,
			timestamp: timestamp
		})
	};
})

*/