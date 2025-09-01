import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    axios
      .get("https://simpletodoapis.onrender.com/api/todos/getAllTodos")
      .then((res) => console.log(res.data))
      .catch((error) => {console.log(error)})
  }, [])

  return (
    <div>App</div>
  )
}

export default App

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://simpletodoapis.onrender.com/api/todos/getAllTodos")
//       .then((res) => {
//         setTodos(res.data);   // save data in state
//       })
//       .catch((error) => {
//         console.error("Error fetching todos:", error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.length > 0 ? (
//           todos.map((todo) => (
//             <li key={todo._id}>{todo.title}</li>
//           ))
//         ) : (
//           <p>No todos found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
