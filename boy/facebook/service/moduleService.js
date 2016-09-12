

var moduleService = angular.module('moduleService', ['facebookConfig']);


moduleService.service('serviceLang',function(){
    this.getname = function(){
        return "boyyyy";
    };
});

moduleService.service('setLang',['lang','storage',function(lang,storage){
    var lang = 'th';
    var langStorage = storage.get('ln');
    if(angular.isUndefined(langStorage) || langStorage == null){
        storage.set('ln',lang);
    }

    this.getLang = function(){
        return storage.get('ln');
    }

    this.setLang = function(ln){
        return storage.set('ln',ln);
    }


}]);

moduleService.service('storage',function(){
    this.set = function(key,val){
        localStorage.setItem(key,val);
    };

    this.get = function(key){
        return localStorage.getItem(key);
    };
});

