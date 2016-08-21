var MyApp = angular.module("MyApp", ["ui.router"]);

MyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "templates/main/main.html",
      controller: "MainController",
      controllerAs: "main"
    })
    .state("main.home", {
      url: "home",
      templateUrl: "templates/home/home.html",
    })
    .state("main.login", {
      url: "login",
      templateUrl: "templates/login/login.html",
    })
    .state("chat", {
      url: "/chat",
      templateUrl: "templates/main/main.html"
    })
	.state("chat.room",{
		url: "/:chatName",
		templateUrl: "templates/chat/chatroom.html",
	  controller: "ChatController",
	  controllerAs: "chat"
	})
	/*
    .state("stuff", {
      url: "/stuff",
      templateUrl: "templates/stuff/stuff.html",
      controller: "StuffController",
      controllerAs: "stuffCtrl"
    })*/
});
