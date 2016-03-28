
var app = angular.module('myLeaderBoard', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/leaderBoard.html',
					controller: 'MainController'
				})
				.otherwise('/')
		})
