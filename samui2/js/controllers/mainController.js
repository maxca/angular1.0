/** main controller */
(function(){
	var mainController = angular.module('mainController', ['moduleConfig','facebookFactory','serviceLocalStorage']);
	mainController.controller('mainController', ['$scope', '$window', 'config','facebook','localStorage',
	function($scope, $window ,config,facebook,localStorage) {
		
		console.log(config);
		facebook.checkConnect().then(function(status){
			/** case already authen */
			console.log(status);
			console.log(facebook.getProfile());
			 facebook.getProfile().then(function(data){
				$scope.profile = data;
				localStorage.set('profile',angular.toJson(data));
			});
		},function(err){
			console.log(error);
		});
		
		
	}]);
}());