
var app = angular.module('myLeaderBoard', ['ngRoute', 'ngAnimate'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/leaderBoard.html',
					controller: 'MainController'
				})
				.otherwise('/')
		})
