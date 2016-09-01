


(function() {
 
  angular.module('herpderp', ['ngRoute']);

  angular.module('herpderp')
	.controller('defaultController', function($scope, $route) {
		$scope.data = {
			name: 'Eak',
			email: 'ekkasith.wis@ascendcorp.com',
			phone: '0957201071',
			cid: '1102000197849',
			password: '9541859',
		};

	  $scope.submit = function(valid) {
	  	console.log($scope.data);
	  	console.log(valid);
	  }
	});
 
})();