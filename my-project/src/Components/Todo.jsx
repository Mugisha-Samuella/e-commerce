import React from "react";
import { useState } from "react";
import leftImage from "../assets/Images/login.svg"

const Todo = () => {
    const [todo, setTodo] = useState("");
    const[todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo])
    }

    // const [name, setName] = useState("");
    // const [info, setInfo] = useState([]);

    // function handleSubmit(e){
    //   e.preventDefault();

    //   setInfo([...info, name])
    // }

  return (
    <>
    <div className=" w-screen items-center justify-center">
      <div>
        <img src={leftImage} alt="" />
      </div>
      <form className="flex flex-col max-w-[15rem] gap-2" onSubmit={handleSubmit}>
        <h4>Username</h4>
        <input className="border-black bg-red-400" onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" />
        <h4>Email</h4>
        <input className="border-black bg-red-400" onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" />
        <button type='submit'>Login</button>
      </form>
      {todo}
    </div>
{/*     
      <div>
       <form onSubmit={handleSubmit}>
        <h4>Username</h4>
        <input onChange={(e)=>setTodo(e.target.value)} value={name} type="text" />
        <h4>Email</h4>
        <input onChange={(e)=>setTodo(e.target.value)} value={info} type="text" />
        <button type="submit">Login</button>
       </form>
       {info}
      </div> */}

    </>
  )
}

export default Todo
