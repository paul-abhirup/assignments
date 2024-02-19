const zod = require("zod");
// using zod to write all the endpoint

/*  ///// zod typeset  //////
{
  title: string,
  description: string ,
}

{
  id: string,
}
// for the request deletion and posting

*/

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
})
const updateTodo = zod.object({
  id: zod.string(),
})

// this exports the zod modules for the usage 
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo
}











