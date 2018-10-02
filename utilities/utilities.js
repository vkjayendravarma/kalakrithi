var jwt = require("jsonwebtoken");
var config = require("../config/config");


module.exports.decryptJWT = function(req){
    if(!req.get("X-AUTH-TOKEN")){
        return false;
    }

    var user_credentials = jwt.verify(req.get("X-AUTH-TOKEN"), config.jwtKey);
    return user_credentials;
}

/*
    To use:

//    var config = require("../config/config");
    var utilities = require("../utilities/utilities");

    var user_credentials = utilities.decryptJWT(req);

    if(user_credentials){
        ..
    }
    else{
        res.status(500).json({success: false, error: "User Not logged in"})
    }
*/
