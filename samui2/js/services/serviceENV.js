/** service get env */
(function() {
	var serviceENV = angular.module('serviceENV', ['moduleConfig']);
	serviceENV.service('detectENV', ['$location', 'config', function($location, config) {
		var location = $location.host();
		this.env = function() {
			switch (location) {
				case 'localhost':
					return {
						env: 'locahost',
						config: config.localhost
					};
					break;
				case 'alpha':
					return {
						env: 'alpha',
						config: config.alpha
					};
					break;
				case 'staging':
					return {
						env: 'staging',
						config: config.staging
					};
					break;
				case 'production':
					return {
						env: 'production',
						config: config.production
					};
					break;
				default:
					return {
						env: 'locahost',
						config: config.localhost
					};
					break;

			}
		};
	}]);
}());