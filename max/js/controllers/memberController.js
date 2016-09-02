/** memberController */
(function(){
	var memberController = angular.module('memberController',['moduleConfig']);
	memberController.controller('memberController',['$scope','config',function($scope,config){
		$scope.getMemberProfile() 
	}]);
}());