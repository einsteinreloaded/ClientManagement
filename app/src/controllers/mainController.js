module.exports=function(app){

    app.controller('mainController',function($scope,CommonUtilService){
        var vm = this;
        vm.text = "Dashboard content";
        $scope.key='';
        $scope.flag=false;
        vm.CommonUtilServicePtr=CommonUtilService;
        CommonUtilService.getClientList();
        CommonUtilService.buildClientCountArray();
        $scope.deleteClient=function(clientid){
            if(confirm("Are you sure to delete this record ?")){
                CommonUtilService.deleteClient(clientid);
            }
        }
        $scope.sort=function(field){// sort functionality for columns
            $scope.key=field;
            $scope.flag=!$scope.flag;
        }
    });

}