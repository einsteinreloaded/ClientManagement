module.exports=function(app){
app.directive('headerDiv',function(){
return {
    restrict:'E',
    templateUrl:"src/templates/header.html",
    controllerAs: 'hctrl',
    controller:'headerController'

}

});

}