/** service local storage */
(function() {
	var serviceLocalStorage = angular.module('serviceLocalStorage', []);
	serviceLocalStorage.service('localStorage', function() {
		this.set = function(key, value) {
			return localStorage.setItem(key, value);
		};
		this.get = function(key) {
			return localStorage.getItem(key);
		};
		this.del = function(key) {
			return localStorage.removeItem(key);
		}
		this.cls = function() {
			return localStorage.clear();
		}
	});
}());