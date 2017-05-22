module.exports=function(app){

require("./headerController.js")(app);
require("./mainController.js")(app);
require("./addController.js")(app);
require("./editController.js")(app);
require("./viewController.js")(app);

}