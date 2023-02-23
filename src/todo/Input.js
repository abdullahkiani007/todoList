import React, { useState } from 'react'



function Input({settodo,id, todo}) {


    // const [message, setMessage] = useState([ ])



  const [text , setText] = useState('');

  function handleChange(event){
    setText(event.target.value)

  }

  function handleSubmit(event){
    event.preventDefault();
    const newTodo = {id:id , text:text};
    const newArr =[...todo,newTodo];
    settodo(newArr);

    setText('');

  }
  
  return (
    <div>
      <form>
      <input className='item' onChange={ handleChange } type="text" value={text}></input>
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </form>
        

    </div>
  );
}
export default Input;