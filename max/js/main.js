// (function){}());
// basic format function on angular type.
(function() {
	'use stric';
	var appEggLab = angular.module('appEggLab', []);
	appEggLab.controller('mainController', ['$scope', function($scope) {
		$scope.name = 'samark chaisanguans';
		// $scope.list = 'samark chaisanguan';
		var objectJson = {
			item: {
				name: 'samark',
				lastName: 'chaisanguan',
				address: '159/5',
				mobileNo: '0845134582',
			},
			item: {
				name: 'samark',
				lastName: 'chaisanguan',
				address: '159/5',
				mobileNo: '0845134582',
			}
		};
		$scope.list = objectJson;
	}]);
}());