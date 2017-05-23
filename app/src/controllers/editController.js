module.exports=function(app){

    app.controller('editController',function($scope,CommonUtilService,$routeParams){
        var vm = this;
        vm.text = "edit client";
        var clientId=$routeParams.id;
        $scope.statuses=['Active', 'Passive', 'Pipeline', 'Prospect'];
        $scope.client=CommonUtilService.getClientById(clientId);
        $scope.addEditClient=function(client){
            CommonUtilService.editClient(client);
            alert("Edits Saved!");
        }
    });

}