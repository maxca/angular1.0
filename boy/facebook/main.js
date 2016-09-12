(function(){
    var mainApp = angular.module('mainApp',[
        'facebookConfig',
        'moduleService'
    ]);
    mainApp.controller(
        'mainController',['$scope','fb','serviceLang','storage',
        function($scope,fb,$lang,storage){
        $scope.name = $lang.getname();
        $scope.objectValue = fb;
        $scope.init = function(){
            var lang = 'th';
            var langStorage = storage.get('ln');
            if(angular.isUndefined(langStorage) || langStorage == null){
                storage.set('ln',lang);
                //console.log('a');
            }else{
                //console.log('b');
            }



        };
        $scope.change = function(){
            console.log('ok');
        }
        $scope.init();
    }]);


}());