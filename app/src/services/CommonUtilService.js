const url = require("./../../config/app.config.js");

module.exports=function(app){

app.service('CommonUtilService',function($http){
    this.clientId=150;

    //this.countArray=[{title:"All", count: 0},{title:"Active", count:0},{title:"Passive",count:0},{title:"Pipeline",count:0},{title:"Prospect",count:0}];

    this.clientIdGenerator=function(){// generates a client id so that client id is unique for new records
        return this.clientId++;
    }
    this.getClientList=function(){//gets client list from server on first load and sets it to the clientList
        if(!!!this.clientList){
            return $http.get(url + "users").then((res)=>{

                    this.clientList = res.data;
                    this.buildClientCountArray();
                    return res.data;
                });
        }
        
    }
    this.addClient=function(client){// adds new client to the list
        client.ClientId=this.clientIdGenerator();//assigning id to client object
        this.clientList.push(client);
    }

    this.deleteClient=function(clientId){// deletes client from the list
        this.clientList=this.clientList.filter((client)=>{
            return client.ClientId!=clientId;
        });
    }

    this.editClient=function(client){// updates the particular client in the list 
        this.clientList=this.clientList.map(function(user){
            return client.ClientId==user.ClientId?client:user;
        })
    }

    this.getClientById=function(clientId){// gets a particular client by client id
        return this.clientList.find(x => x.ClientId == clientId);
    }

    this.buildClientCountArray=function(){
       this.countArray=[{title:"All", count: 0},{title:"Active", count:0},{title:"Passive",count:0},{title:"Pipeline",count:0},{title:"Prospect",count:0}];
        if(!!this.clientList){
        
            this.clientList.map((client)=>{
                ['Active', 'Passive', 'Pipeline', 'Prospect']
                switch(client.status){
                    case "Active": this.countArray[1].count++; 
                                    break;
                    case "Passive": this.countArray[2].count++;
                                    break;
                    case "Pipeline": this.countArray[3].count++;  
                                    break;
                    case "Prospect": this.countArray[4].count++; 
                                    break;
                }
            });
            this.countArray[0].count=this.clientList.length;
        }
    }

});

}