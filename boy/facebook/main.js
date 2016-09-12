(function(){
    var mainApp = angular.module('mainApp',[
        'facebookConfig',
        'moduleService'
    ]);
    mainApp.controller(
        'mainController',['$scope','fb','serviceLang','storage','setLang',
        function($scope,fb,$lang,storage,setLang){
        $scope.name = $lang.getname();
        $scope.objectValue = fb;
            var dataLang = {};
        $scope.init = function(){
            console.log(setLang.getLang());



        };
        $scope.change = function(){
            var lang = storage.get('ln');
            if(lang == 'en'){
                storage.set('ln','th');
                $scope.displaylang = 'th';
            }else{
                storage.set('ln','en');
                $scope.displaylang = 'en';
            }
        }
        $scope.init();
    }]);


}());