var angular = require('angular');
var app = angular.module('app',[]);
require("./controllers/headerController.js")(app);
require("./directives/HeaderDirective.js")(app);
