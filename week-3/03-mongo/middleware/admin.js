const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    username = req.headers.username;//harkirat@gmail.com
    password = req.headers.password;//123456

    Admin.findOne({
         username: username,
         password: password
        })
        .then(function(value){
            if(value){
                next();
            }else{
                res.status(401).json({message: "Unauthorized"});
            }
        })
}

module.exports = adminMiddleware;