module.exports=function(app){

    app.controller('viewController',function($scope,CommonUtilService,$routeParams,$location){
        var vm = this;
        vm.text = "view client";
        var clientId=$routeParams.id;
        
        $scope.client=CommonUtilService.getClientById(clientId);

        $scope.deleteClient=function(){
            if(confirm("Are you sure to delete this record ?")){
                CommonUtilService.deleteClient(clientId);
                $location.path("/")// redirecting to dashboard on delete
            }
        }
    });

}