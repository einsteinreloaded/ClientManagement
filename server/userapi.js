const axios = require("axios");
  
const UserFunctions={  
        getUsers(dbUrl){
            return axios.get(dbUrl);
            }
}
module.exports = UserFunctions;