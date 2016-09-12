(function(){
	var serviceCall3rd = angular.module('serviceCall3rd', ['moduleConfig','serviceENV']);
	serviceCall3rd.service('callApi', ['$http','$location','config','detectENV',function($http,$location,config,detectENV){
		var baseURL = angular.isDefined(detectENV.env.config.baseURL) ? detectENV.env.config.baseURL : 'http://localhost';
	}]);
}());