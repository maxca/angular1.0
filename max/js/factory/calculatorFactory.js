/** calculator factory */
var calculatorFactory = angular.module('calculatorFactory',[]);
calculatorFactory.factory('cal',function(){
	this.sum = function(first, sec) {
		return parseInt(first) + parseInt(sec);
	};
});