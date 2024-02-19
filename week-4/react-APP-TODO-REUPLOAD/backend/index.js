
// simple express boilerplate 
// with express.json() middleware 

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db")
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
app.post("/todo",async function(req,res){
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: " you sent the wrong inputs",
    })
    return; 
  }
  //put it in mongoDB
  await todo.create ({
    title: createPayload.title ,
    description: createPayload.description,
  })
});


//a get endpoint for geting a todo 
app.get("/todos",function(req,res){

});



//a put endpoint for marking the todo as completed or not 
app.put("/completed",function(req,res){
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: " you sent the wrong inputs",
    })
    return;
  }

});

































