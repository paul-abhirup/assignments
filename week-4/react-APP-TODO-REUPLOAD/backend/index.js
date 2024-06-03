
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
    
    // this completed helps to solve bug like when you create a todo its not completed so u have to mark it as completed in the frontend 
    completed: false
  })

  // we are using async await to resolve sceneraios when the database is down the user is shown with the msg that the database is created

  res.json({
    msg:"Todo created"
  })
});


//a get endpoint for geting a todo 
app.get("/todos",async function(req,res){
const todos = await todo.find({});

  // we can fill the object to filter based on params
  // todo.find({
  //   title: " gym"
  // })
  // we are using async to deal with server or with issues: lags,etc. 
  // console.log(todos);// promise

  // using json as a respond
  res.json({
    todos
  })

});


//a put endpoint for marking the todo as completed or not 
app.put("/completed",async function(req,res){
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: " you sent the wrong inputs",
    })
    return;
  }
  await todo.update({
    // we are using _id because in mongodb every unique entry is identified by _id automatically along with title , description , etc
    _id: req.body.id
  },{
    completed: true
  })
  res.json({
    msg: "Todo mark as completed"
  })
});

app.listen(3000);































