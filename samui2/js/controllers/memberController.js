/** memberController */
(function(){
	var memberController = angular.module('memberController',['moduleConfig']);
	memberController.controller('memberController',['$scope','$location','config',function($scope,$location,config){
		$scope.getMemberProfile = function() {

		};
		$scope.registerMember = function($valid) {

		};
		$scope.updateMemberProfile = function($valid) {

		};
		$scope.deleteMember = function(memberId) {

		}
	}]);
}());