// (function {}());
// basic format function on angular type.
(function() {
	"use strict";
	var appEggLab = angular.module('appEggLab', [
		'ngRoute',
		'mainController',
		'moduleConfig',
		// 'facebookFactory',
		]);

	appEggLab.config(function($routeProvider) {
		$routeProvider.when('/index', {
			templateUrl: 'display.html',
			controller: 'mainController'
		}).when('/google', {
			templateUrl: 'js/index2.html',
			controller: 'reqController'
		}).otherwise({
			redirectTo: '/index'
		});
	});
	/** controller simple display  */
	
	// /** factory */
	// appEggLab.factory('facebookService', function($q) {
	// 	return {
	// 		getMyLastName: function() {
	// 			var deferred = $q.defer();
	// 			FB.api('/me', {
	// 				fields: 'last_name'
	// 			}, function(response) {
	// 				console.log(response);
	// 				if (!response || response.error) {
	// 					deferred.reject('Error occured');
	// 				} else {
	// 					deferred.resolve(response);
	// 				}
	// 			});
	// 			return deferred.promise;
	// 		}
	// 	}
	// });
	// /** check connect facebook */
	// appEggLab.factory('checkConnect', function($q) {
	// 	return {
	// 		status: function() {
	// 			var deferred = $q.defer();
	// 			FB.Event.subscribe('auth.authResponseChange', function(res) {
	// 				if(res.status === 'connected') {
	// 					deferred.resolve(res);
	// 				} else {
	// 					deferred.reject('error');
	// 				}
	// 			});
	// 			return deferred.promise;
	// 		}
	// 	};
	// });
	/** controller simple 2 reqest */
	appEggLab.controller('reqController', ['$scope', '$http', function($scope, $http) {
		// $http({
		// 	method: "GET",
		// 	url: "http://chaodev.com/training/getUsers.php",
		// 	data: {},
		// 	timeout: 10000,
		// 	headers: {
		// 		// 'Content-Type': 'application/json;charset=utf-8'
		// 	}
		// }).then(function(success) {
		// 	console.log(success);
		// 	console.log('ok get');
		// }, function(error) {
		// 	console.log(error);
		// });

		$http({
			method: "POST",
			url: "http://chaodev.com/training/addUsers.php",
			data: {
				name: "chaowalit__",
				mobile: "0988778890"
			},
			timeout: 10000,
			headers: {
				// 'Content-Type': 'application/json;charset=utf-8'
			}
		}).then(function(success) {
			console.log(success);
			console.log('ok post');
		}, function(error) {
			console.log(error);
		});
	}]);
	/** [description] */
	appEggLab.service('serviceCall3rds', ['$scope', '$http', function($scope, $http) {
		this.register = function(params) {

		}
	}]);
	/**  service config */
	// var serviceConfig = angular.module('serviceConfig', []);
	// serviceConfig.constant('config',{
	// 	getUser: 'http://chaodev.com/training/getUsers.php',
	// 	addUser: 'http://chaodev.com/training/addUsers.php',

	// } 
	// });


}());