const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    username = req.headers.username;//harkirat@gmail.com
    password = req.headers.password;//123456

    User.findOne({
        username: username,
        password: password
    })
        .then(function (value) {
            if (value) {
                next();
            } else {
                res.status(401).json({ message: "Unauthorized" });
            }
        })
}

module.exports = userMiddleware;