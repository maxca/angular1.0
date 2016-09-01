// (function){}());
// basic format function on angular type.
(function() {
    "use strict";
    var appTrainAngular = angular.module('appTrainAngular', ['ngRoute']);

    appTrainAngular.config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'form.html',
            controller: 'mainController'
        }).when('/google',{
            templateUrl: 'js/index2.html',
            controller: 'reqController'
        }).otherwise({
            redirectTo: '/index'
        });
    });
    /** controller simple display  */
    appTrainAngular.controller('mainController', ['$scope', function($scope) {
        $scope.fnSubmit = function(data){
            console.log(data)
        };
    }]);
    /** controller simple 2 reqest */
    appTrainAngular.controller('reqController', ['$scope',function($scope){
        alert('ok');
    }]);
}());