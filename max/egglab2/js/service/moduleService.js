/** module service  */
var moduleService = angular.module('moduleService', ['facebookConfig']);

moduleService.service('serviceLang', function() {
	this.getname = function() {
		return 'samark chaisangun';
	};

});

/** set lang */
moduleService.service('setLang', ['lang','storage', function(lang,storage) {
	var lang = 'th';
	alert(storage.get('ln'));
	var langStorage =  storage.get('ln');
	// if (angular.isUndefined(langStorage) || langStorage == null) {
	// 	storage.set('ln', lang);
	// } 
	this.getLang = function() {
		switch(langStorage){
			case 'th':
				return lang.th;
				break;
			case 'en':
				return lang.en;
				break;
			default:
				return lang.th;
				break;
		} 
	};
	this.setLang = function(ln) {
		return storage.set('ln',ln);
	};
}]);

/** storage service */
moduleService.service('storage', function() {
	this.set = function(key, value) {
		localStorage.setItem(key, value);
	};
	this.get = function(key) {
		return localStorage.getItem(key);
	};
});