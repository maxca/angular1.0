(function(){
	var myApp = angular.module('myApp', [
		"thirdPartyApi"
	]);
	myApp.controller('firstController', ['$scope', '$http', '$q', 'users' , 'usersV2', function ($scope, $http, $q, users, usersV2) {
		$scope.users = [];
		users.getUsers().then(function(res){
			$scope.users = res;
			$scope.showLog();
		}, function(error){
			$scope.users = error;
		});

		$scope.showLog = function(){
			console.log($scope.users);
		};

		usersV2.getUsersV2().then(function(res){
			$scope.users = res;
			$scope.showLog();
		}, function(error){
			$scope.users = error;
		});
		
		$scope.datas = [];
		$scope.addDataForm = function(isValid){
			if(isValid){
				
			}else{
				alert("กรุณากรอกฟอร์มให้ครบ");
			}
		};
		// $http({
		// 	method: "GET",
		// 	url: "http://chaodev.com/training/getUsers.php",
		// 	data: {},
		// 	timeout: 10000,
		// 	headers: {
		// 		'Content-Type': 'application/json;charset=utf-8'
		// 	}
		// }).then(function(success){
		// 	console.log(success);
		// 	console.log('ok get');
		// }, function(error){
		// 	console.log(error);
		// });

		// $http({
		// 	method: "POST",
		// 	url: "http://chaodev.com/training/addUsers.php",
		// 	data: {name: "chaowalit__", mobile: "0988778890"},
		// 	timeout: 10000,
		// 	headers: {
		// 		'Content-Type': 'application/json;charset=utf-8'
		// 	}
		// }).then(function(success){
		// 	console.log(success);
		// 	console.log('ok post');
		// }, function(error){
		// 	console.log(error);
		// });

	}]);
}());