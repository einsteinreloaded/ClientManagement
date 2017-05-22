module.exports=function(app){

    app.controller('addController',function($scope,CommonUtilService,$routeParams){
        var vm = this;
        vm.text = "view client";
        var clientId=$routeParams.id;
        $scope.client=CommonUtilService.getClientById(clientId);


    });

}