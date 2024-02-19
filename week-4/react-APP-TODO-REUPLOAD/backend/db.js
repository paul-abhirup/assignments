// mongoDB schema 
/**
 * Todo {
 *    title: string ,
 *    description: string,
 *    completed: string,        
 * }
 */
const mongoose = require("mongoose");
const { string } = require("zod");


//mongoDB url
// mongodb+srv://admin:7xuVO00xAA4AuJ6n@cluster0.qdet3yx.mongodb.net/todos
// // on a real world project u put this url in a .env file 


mongoose.connect("mongodb+srv://admin:7xuVO00xAA4AuJ6n@cluster0.qdet3yx.mongodb.net/todos")

//todo Schema
const todoSchema = mongoose.Schema({
  title: string,
  description: string,
  completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
  todo
}













