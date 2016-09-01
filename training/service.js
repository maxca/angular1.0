(function(){
	var serviceThirdPartyApi = angular.module("thirdPartyApi", [

	]);
	serviceThirdPartyApi.factory("users", function($http, $q){
		return {
			getUsers : function(){
				var deferred = $q.defer();
				$http.get("http://chaodev.com/training/getUsers.php").success(function(res){
					deferred.resolve(res);
				});
				return deferred.promise;
			}
		}
	});

	serviceThirdPartyApi.service("usersV2", function($http, $q){
		this.getUsersV2 = function(){
			var deferred = $q.defer();
			$http({
				method: "GET",
				url: "http://chaodev.com/training/getUsers.php",
				data: {},
				timeout: 10000,
				headers: {
					//'Content-Type': 'application/json;charset=utf-8'
				}
			}).then(function(success){
				deferred.resolve(success);
			}, function(error){
				deferred.resolve(error);
			});
			// $http.get("http://chaodev.com/training/getUsers.php").success(function(res){
			// 	deferred.resolve(res);
			// });
			return deferred.promise;
		};
	});

}());