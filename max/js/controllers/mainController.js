/** main controller */
(function(){
	var mainController = angular.module('mainController', ['moduleConfig','facebookFactory']);
	mainController.controller('mainController', ['$scope', '$window', 'config','facebook',
	function($scope, $window ,config,facebook) {
		
		console.log(config);
		facebook.checkConnect().then(function(status){
			/** case already authen */
			console.log(status);
			console.log(facebook.getProfile());
			 facebook.getProfile().then(function(data){
				$scope.profile = data;
			});
		},function(err){
			console.log(error);
		});
		
		
	}]);
}());