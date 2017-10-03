const axios = require("axios");
const firebase = require("firebase");
const firebase_config = require("./config/web.config.js").firebaseConfig;
// Initialize Firebase
// TODO: Replace with your project's customized code snippet

firebase.initializeApp(firebase_config)
const database = firebase.database();

const UserFunctions={  
        getUsers(){
           return firebase.database().ref('users').once('value').then(function(snapshot) {
                    return snapshot.val();
                });
        },
        writeUserData(users) {
            return firebase.database().ref('users').set(users);
        }
}
module.exports = UserFunctions;