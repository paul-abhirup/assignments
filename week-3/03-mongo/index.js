const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

//this app.use doesnt work like u studied
// The app.use() function is a method in Express.js that is used to mount a function or a series of functions at a specific path.The first argument is the path at which the function(s) will be mounted and the second argument is the function or series of functions to mount. The function(s) will be called when the server receives a request that matches the path specified in the first argument.


//here it means that all req like /admin/sa/asaas/asas/etc , /admin/signup ,etc 
// will the hit the adminRouter
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
