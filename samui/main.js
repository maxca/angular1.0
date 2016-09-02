// (function){}());
// basic format function on angular type.
(function() {
    "use strict";
    var appEggLab = angular.module('appEggLab', ['ngRoute']);
    
    appEggLab.config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'index2.html',
            controller: 'mainController'
        }).when('/google',{
            templateUrl: 'js/index2.html',
            controller: 'reqController'
        }).otherwise({
            redirectTo: '/index'
        });
    });
    /** controller simple display  */
    appEggLab.controller('mainController', ['$scope', function($scope) {

        var formData = [];
        $scope.submitData = function(ist){
            formData = $scope.list.item;
            console.log(formData);
        }


    }]);
    /** controller simple 2 reqest */
    appEggLab.controller('reqController', ['$scope',function($scope){
        // alert('ok');
    }]);
}());