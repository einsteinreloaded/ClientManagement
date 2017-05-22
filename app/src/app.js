var angular = require('angular');
var ngRoute = require('angular-route');
var app = angular.module('app',[ngRoute]);

require("./controllers")(app);
require("./directives")(app);
require("./services")(app);


app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/templates/main.html",
        controller: "mainController",
        controllerAs:"mainCtrl"
    })
    .when("/add", {
        templateUrl : "src/templates/add.html",
        controller: "addController",
        controllerAs:"addCtrl"
    })
    .when("/edit/:id", {
        templateUrl : "src/templates/add.html",
        controller: "editController",
        controllerAs:"editCtrl"
    })
    .when("/view/:id", {
        templateUrl : "src/templates/add.html",
        controller: "viewController",
        controllerAs:"viewCtrl"
    })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
});