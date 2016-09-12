(function() {
	var mainAPP = angular.module('mainAPP', [
		'facebookConfig',
		'moduleService'
	]);
	mainAPP.controller('mainController', [
		'$scope', 'fb', 'serviceLang', 'storage', 'setLang',
		function($scope, fb, $lang, storage, setLang) {
			$scope.name = $lang.getname();
			$scope.objectValue = fb;
			var dataLang = {};
			/** init function  */
			$scope.init = function() {
				
			};
			$scope.change = function() {
				// console.log('ok');

			}
			$scope.init();
		}
	]);
}());