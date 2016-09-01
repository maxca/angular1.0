// (function){}());
// basic format function on angular type.
(function() {
	"use strict";
	var appEggLab = angular.module('appEggLab', ['ngRoute']);
	
	appEggLab.config(function($routeProvider) {
		$routeProvider.when('/index', {
			templateUrl: 'display.html',
			controller: 'mainController'
		}).otherwise({
			redirectTo: '/index'
		});
	});
	/** controller simple display  */
	appEggLab.controller('mainController', ['$scope', function($scope) {
		$scope.submit = function(list){
			if(list){
				console.log('success');
			} else {
				console.log('error');
			}
		}
		$scope.name = '';
		// $scope.list = 'samark chaisanguan';
	}]);
}());