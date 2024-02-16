
// simple express boilerplate 
// with express.json() middleware 

const express = require("express");
const app = express();

app.use(express.json());
//make sure to make all post endpoints work
//parse the body if its a json body


//using zod for validation
//expected inputs 
// body{
//   title :string ;
//   description: string;
// }
// so we have to create a zod types for the inputs 

//post endpoint for creating a todo 
app.post("/todo",function(req,res){

});



//a get endpoint for geting a todo 
app.get("/todos",function(req,res){

});



//a put endpoint for marking the todo as completed or not 
app.put("/completed",function(req,res){

});

































