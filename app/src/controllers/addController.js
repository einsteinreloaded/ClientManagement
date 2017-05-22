module.exports=function(app){

    app.controller('addController',function($scope,CommonUtilService){
        var vm = this;
        vm.text = "add client";
        $scope.statuses=['Active', 'Passive', 'Pipeline', 'Prospect'];

        $scope.addEditClient=function(client){
            CommonUtilService.addClient(client);
            $scope.client={};
        }


    });

}