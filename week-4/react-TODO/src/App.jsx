/*
let state = {
  count : 0 
}

function App () {
  return(
    <div>{state.count}</div>
  )
}
export default App
*/



// let state = {
//   count: 0 
// }

// in react u cant declare a global variable like this and use it to change state 

/*
// here we are creasting a normal counter button

import React from 'react';
import { useState } from 'react';

function App(){

  const [count , setCount ] = useState(0);
  //by using setState(0) we are setting state to 0

  function onClickHandler(){

    // state.count = state.count + 1 ;
    //this is not used due to wrong nature of setting the variable 


    setCount(count + 1);

  }

  return (
    <div>
    <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App

*/




/*

import React from 'react';
import { useState } from 'react';

function App(){

  const [count , setCount ] = useState(0);


  return (

    <div>
    // Parent Component
    <CustomButton count={count} setCount={setCount} />
    // here u have created 2 props of CustomButton function props.count and props.setCount

    <CustomButton count={count + 1} setCount={setCount} />
    <CustomButton count={count - 1} setCount={setCount} />
    <CustomButton count={count * 100} setCount={setCount} />
    </div>
  )
}

// Props are like messages or arguments you pass from one React component (parent) to another (child). They allow you to send data (text, numbers, objects, even functions) from the parent component to the child component, telling it what information to display or use.

//Child component
function CustomButton(props){

// its not getting the state as an input but it is getting the props as an input

  function onClickHandler() {
    props.setCount(props.count + 1);
  }


  return(
    <button onMouseOver={onClickHandler}>
      Counter {props.count}
    </button>
  )  
}

//this is better way because u can reuse it 

export default App

*/


/*

import React from 'react';
import { useState } from 'react';

// todo application
// todo
// {
//   todo: [{title: 'todo 1',description: 'buy milk', completed : false}]
// }
//think how to render multiple todo items

function App(){

  const [todos , setTodos ] = useState([
    {
      title: 'go to gym',
      description: '100 pushups',
      completed: false
    },{
      title: 'do DSA',
      description: 'leetcode',
      completed: false
    }
  ]);

  // doing in an ugly way
  // stringify the object and then parse it
  //this stringify the todo and renders them

  return (
    <div>
    {JSON.stringify(todos)}
    </div>
  )
}

// basic structure of a todo
// {
//   title: 'go to gym',
//   description: '100 pushups',
//   completed: false
// }

//Child component

function Todo(props){
  return(
    <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

    </div>
  )
}

//this is better way because u can reuse it 

export default App
*/


import React from 'react';
import { useState } from 'react';

function App(){

  const [todos , setTodos ] = useState([
    {
      title: 'go to gym',
      description: '100 pushups',
      completed: false
    },{
      title: 'do DSA',
      description: 'leetcode',
      completed: false
    }
  ]);


  // this is ugly way where u have to enter all the todos manually
  /*
  return (
    <div>
    <Todo title='harkirat' description='hello' />
    <Todo title='harkirat' description='hello' />

    <Todo title={todos[0].title} description={todos[0].description} />
    <Todo title={todos[1].title} description={todos[1].description} />
    </div>
  )
  */

  // any time a parent re-renders its child also re-renders
  function addTodo(){
    // [todos] =  [1,2]
    //[...todos, 3] => [1,2,3]
    setTodos([...todos,{
      title: 'code more',
      description: 'banging keyboard hardcore'
    }])
  }

  return(
    <div>
      <button onClick={addTodo}>
        Add Todo
      </button>
    {/* this is a smater way to do it as it iterates over the todos array and renders the todos without any manual work */}
    {todos.map((todo)=>{
      return <Todo title= { todo.title } description= {todo.description} />
    })}
    <Dummybutton></Dummybutton>
    </div>
  )
}

function Dummybutton(){
  console.log("i am a child re-rendering due to parents getting re-rendered")
}

// basic structure of a todo
// {
//   title: 'go to gym',
//   description: '100 pushups',
//   completed: false
// }

//component

function Todo(props){
  return(
    <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    </div>
  )
}

//this is better way because u can reuse it 

export default App





























