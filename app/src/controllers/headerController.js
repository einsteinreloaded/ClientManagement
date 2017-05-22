module.exports=function(app){
app.controller('headerController',function($rootScope,$scope,$location){
    var vm=this;
    vm.headerText="its the header";
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        vm.isAddVisible=$location.path()=="/add" || $location.path()=="/edit"?false:true;
        });
    });

}