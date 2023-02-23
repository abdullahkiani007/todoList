import React, { useState } from 'react'

function Todo( {todos,settodos} ) {


    const handleChange = (Id) =>{

        let newTodo = todos.filter(obj => obj.id !== Id);
        settodos(newTodo)
    }
  return (
    <>
        {todos.map( ({ id , text })=>{
            return <div key={id} className="item">
                {text}
                <button className='btn' onClick={()=>{handleChange(id)}} > Complete</button>
            </div>
        })}
    </>
  )
}

export default Todo