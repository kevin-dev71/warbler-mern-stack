const jwt = require("jsonwebtoken");

// make sure the user is logged - Authenticated
exports.loginRequired = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token , process.env.SECRET_KEY, function(err, decoded_payload){
            // if we have  successfully decoded this token
            if(decoded_payload){
                return next();
            } else {
                return next({
                    status: 401, // unauthorize
                    message: "Please log in first"
                })
            }
            
        })
    } catch(err) {
        return next({
            status: 401, // unauthorize
            message: "Please log in first"
        })
    }
}

// make sure we get the correct user - Authorization
// /api/users/:id/messages
exports.ensureCorrectUser = function(req , res, next) {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token , process.env.SECRET_KEY, function(err, decoded_payload){
            // if we have  successfully decoded this token
            if(decoded_payload && decoded_payload.id === req.params.id){
                return next();
            } else {
                return next({
                    status: 401, // unauthorize
                    message: "Unauthorized"
                })
            }
            
        })
    } catch(err) {
        return next({
            status: 401, // unauthorize
            message: "Unauthorized"
        })
    }
}