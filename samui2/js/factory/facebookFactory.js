/** facebook factory */
var facebookFactory = angular.module('facebookFactory', ['moduleConfig']);

facebookFactory.service('facebook', ['$window','facebookConfig', 'connect','getProfile',
	function($window,facebookConfig,connect,getProfile) {
	var init = function() {
		$window.fbAsyncInit = function() {
			FB.init({
				appId: facebookConfig.appId,
				status: facebookConfig.status,
				cookie: facebookConfig.cookie,
				xfbml: facebookConfig.xfbml,
				version: facebookConfig.version
			});
		};
	};
	init();
	this.checkConnect = function(){
		return connect.status();
	};
	this.getProfile = function() {
		return getProfile.profile();
	}
}]);

/** check status  connect*/
facebookFactory.factory('connect', function($q) {
	return {
		status: function() {
			var deferred = $q.defer();
			FB.Event.subscribe('auth.authResponseChange', function(res) {
				if (res.status === 'connected') {
					deferred.resolve(res);
				} else {
					deferred.reject('error');
				}
			});
			return deferred.promise;
		}
	};
});

/** get profile  */
facebookFactory.factory('getProfile', function($q) {
	return {
		profile: function() {
			var deferred = $q.defer();
			FB.api('/me', {
				fields: 'name,last_name,email'
			}, function(response) {
				console.log(response);
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});
			return deferred.promise;
		}
	};
});