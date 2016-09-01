// (function){}());
// basic format function on angular type.
(function() {
    "use strict";
    var appEggLab = angular.module('appEggLab', ['ngRoute']);
    
    appEggLab.config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'display.html',
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
        $scope.name = 'samark chaisanguans';
        // $scope.list = 'samark chaisanguan';
        var objectJson = {
            item: {
                name: 'samark',
                lastName: 'chaisanguan',
                address: '159/5',
                mobileNo: '0845134582',
            },
            item: {
                name: 'samark',
                lastName: 'chaisanguan',
                address: '159/5',
                mobileNo: '0845134582',
            }
        };
        $scope.list = objectJson;
    }]);
    /** controller simple 2 reqest */
    appEggLab.controller('reqController', ['$scope',function($scope){
        alert('ok');
    }]);
}());