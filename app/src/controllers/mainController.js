module.exports=function(app){

    app.controller('mainController',function($scope,CommonUtilService){
        var vm = this;
        vm.text = "Dashboard content";
        vm.CommonUtilServicePtr=CommonUtilService;
        CommonUtilService.getClientList();
        $scope.deleteClient=function(clientid){
            CommonUtilService.deleteClient(clientid);
        }
    });

}