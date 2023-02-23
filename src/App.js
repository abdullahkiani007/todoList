import React, { useState, useEffect } from "react";
import Input from "./todo/Input";
import TODO from "./todo/Todo";

function App() {
  /*
JSON.parse(localStorage.getItem('todos')) || [] is a JavaScript expression 
that retrieves the todos array from local storage and assigns it to the todos state.
If the todos array is not present in local storage, it initializes the todos state with an empty array [].
The expression uses the localStorage.getItem('todos') method to retrieve the todos array from local storage.
The getItem() method retrieves the value of the specified key from local storage.
 In this case, the key is 'todos'.
JSON.parse() method is used to convert the retrieved string to an array.
The JSON.parse() method is used because localStorage can only store strings,
so we need to convert the stored string back to an array.
The || operator is a logical OR operator. If the JSON.parse() method returns null or undefined,
which happens if the todos array is not present in local storage,
the expression evaluates to an empty array [] and initializes the todos state with an empty array.
*/
  const [todos, settodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  let id = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      {/* <Final/> */}
      <h1> TODO APP</h1>
      <Input settodo={settodos} id={id} todo={todos} />
      <TODO todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
