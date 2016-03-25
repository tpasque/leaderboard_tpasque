
var app = angular.module('myLeaderBoard', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/home.html',
					controller: 'MainController'
				})
				.otherwise('/')
		})
