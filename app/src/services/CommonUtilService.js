const url = require("./../../config/app.config.js");

module.exports=function(app){

app.service('CommonUtilService',function($http){
this.clientId=150;

this.clientIdGenerator=function(){
    return this.clientId++;
}
    this.getClientList=function(){
        if(!!!this.clientList){
            return $http.get(url + "users").then((res)=>{
            
                    this.clientList = res.data;
                    return res.data;
                });
        }
    }
    this.addClient=function(client){
        client.ClientId=this.clientIdGenerator();//assigning id to client object
        this.clientList.push(client);
    }

    this.deleteClient=function(clientId){
        this.clientList=this.clientList.filter((client)=>{
            return client.ClientId!=clientId;
        });
    }

    this.editClient=function(client){
        this.clientList=this.clientList.map(function(user){
            return client.ClientId==user.ClientId?client:user;
        })
    }

    this.getClientById=function(clientId){
        return this.clientList.find(x => x.ClientId == clientId);
    }

});

}