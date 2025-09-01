// import axios from 'axios'
// import React, { useEffect } from 'react'

// const App = () => {

//   useEffect(() => {
//     axios
//       .get("https://simpletodoapis.onrender.com/api/todos/getAllTodos")
//       .then((res) => console.log(res.data))
//       .catch((error) => {console.log(error)})
//   }, [])

//   return (
//     <div>App</div>
//   )
// }

// export default App


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



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [todos, setTodos] = useState([])   // state to store API data

//   useEffect(() => {
//     axios
//       .get("https://simpletodoapis.onrender.com/api/todos/getAllTodos")
//       .then((res) => {
//         console.log(res.data)   // log data to check structure
//         setTodos(res.data)      // save data in state
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [todos, setTodos] = useState([])   // state to store API data
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     axios
//       .get("https://simpletodoapis.onrender.com/api/todos/getAllTodos")
//       .then((res) => {
//         console.log("API Response:", res.data)

//         // If response has `data` field
//         if (Array.isArray(res.data)) {
//           setTodos(res.data)
//         } else if (Array.isArray(res.data.data)) {
//           setTodos(res.data.data)
//         } else {
//           setError("Unexpected API response")
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//         setError("Failed to fetch todos")
//       })
//       .finally(() => setLoading(false))
//   }, [])

//   if (loading) return <h2>Loading...</h2>
//   if (error) return <h2>{error}</h2>

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App



// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const API_URL = "https://simpletodoapis.onrender.com/api/todos";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newTodo, setNewTodo] = useState({ title: "", body: "" });

//   // ✅ Fetch all todos
//   const fetchTodos = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${API_URL}/getAllTodos`);
//       setTodos(res.data.data || res.data);
//     } catch (err) {
//       setError("Failed to fetch todos", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Add a todo
//   const addTodo = async () => {
//     if (!newTodo.title || !newTodo.body) return alert("Please fill all fields");
//     try {
//       await axios.post(`${API_URL}/addTodo`, newTodo);
//       setNewTodo({ title: "", body: "" });
//       fetchTodos();
//     } catch (err) {
//       setError("Failed to add todo", err);
//     }
//   };

//   // ✅ Update a todo
//   const updateTodo = async (id) => {
//     const updated = { title: "Updated Title", body: "Updated Body" };
//     try {
//       await axios.put(`${API_URL}/updateTodo/${id}`, updated);
//       fetchTodos();
//     } catch (err) {
//       setError("Failed to update todo", err);
//     }
//   };

//   // ✅ Delete a todo
//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/deleteTodo/${id}`);
//       fetchTodos();
//     } catch (err) {
//       setError("Failed to delete todo", err);
//     }
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
//   if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Todo Manager</h1>

//       {/* Add Todo Form */}
//       <div style={styles.form}>
//         <input
//           style={styles.input}
//           type="text"
//           placeholder="Title"
//           value={newTodo.title}
//           onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
//         />
//         <input
//           style={styles.input}
//           type="text"
//           placeholder="Body"
//           value={newTodo.body}
//           onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
//         />
//         <button style={styles.addBtn} onClick={addTodo}>
//           ➕ Add Todo
//         </button>
//       </div>

//       {/* Todo List */}
//       <div style={styles.todoList}>
//         {todos.map((todo) => (
//           <div key={todo._id} style={styles.todoCard}>
//             <h3 style={styles.todoTitle}>{todo.title}</h3>
//             <p style={styles.todoBody}>{todo.body}</p>
//             <div style={styles.actions}>
//               <button style={styles.updateBtn} onClick={() => updateTodo(todo._id)}>
//                 ✏️ Update
//               </button>
//               <button style={styles.deleteBtn} onClick={() => deleteTodo(todo._id)}>
//                 🗑️ Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ✅ Inline Styles
// const styles = {
//   container: {
//     maxWidth: "800px",
//     margin: "20px auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f9fafb",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     color: "#2563eb",
//   },
//   form: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     border: "1px solid #d1d5db",
//     borderRadius: "6px",
//   },
//   addBtn: {
//     padding: "10px 15px",
//     backgroundColor: "#16a34a",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   todoList: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "15px",
//   },
//   todoCard: {
//     background: "white",
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
//   },
//   todoTitle: {
//     margin: "0 0 5px",
//     color: "#1e293b",
//   },
//   todoBody: {
//     margin: "0 0 10px",
//     color: "#4b5563",
//   },
//   actions: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   updateBtn: {
//     padding: "6px 10px",
//     backgroundColor: "#2563eb",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   deleteBtn: {
//     padding: "6px 10px",
//     backgroundColor: "#dc2626",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default App;



import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://simpletodoapis.onrender.com/api/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState({ title: "", body: "" });
  const [editTodo, setEditTodo] = useState(null); // store todo being edited

  // ✅ Fetch all todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/getAllTodos`);
      setTodos(res.data.data || res.data);
    } catch (err) {
      setError("Failed to fetch todos", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add a todo
  const addTodo = async () => {
    if (!newTodo.title || !newTodo.body) return alert("Please fill all fields");
    try {
      await axios.post(`${API_URL}/addTodo`, newTodo);
      setNewTodo({ title: "", body: "" });
      fetchTodos();
    } catch (err) {
      setError("Failed to add todo", err);
    }
  };

  // ✅ Start editing a todo
  const startEdit = (todo) => {
    setEditTodo(todo);
  };

  // ✅ Save updated todo
  const saveUpdate = async () => {
    try {
      await axios.put(`${API_URL}/updateTodo/${editTodo._id}`, {
        title: editTodo.title,
        body: editTodo.body,
      });
      setEditTodo(null);
      fetchTodos();
    } catch (err) {
      setError("Failed to update todo", err);
    }
  };

  // ✅ Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/deleteTodo/${id}`);
      fetchTodos();
    } catch (err) {
      setError("Failed to delete todo", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo Manager</h1>

      {/* Add Todo Form */}
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Body"
          value={newTodo.body}
          onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
        />
        <button style={styles.addBtn} onClick={addTodo}>
          ➕ Add Todo
        </button>
      </div>

      {/* Todo List */}
      <div style={styles.todoList}>
        {todos.map((todo) => (
          <div key={todo._id} style={styles.todoCard}>
            {editTodo && editTodo._id === todo._id ? (
              <>
                {/* Edit Mode */}
                <input
                  style={styles.input}
                  value={editTodo.title}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, title: e.target.value })
                  }
                />
                <input
                  style={styles.input}
                  value={editTodo.body}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, body: e.target.value })
                  }
                />
                <button style={styles.updateBtn} onClick={saveUpdate}>
                  💾 Save
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => setEditTodo(null)}
                >
                  ❌ Cancel
                </button>
              </>
            ) : (
              <>
                {/* View Mode */}
                <h3 style={styles.todoTitle}>{todo.title}</h3>
                <p style={styles.todoBody}>{todo.body}</p>
                <div style={styles.actions}>
                  <button style={styles.updateBtn} onClick={() => startEdit(todo)}>
                    ✏️ Edit
                  </button>
                  <button style={styles.deleteBtn} onClick={() => deleteTodo(todo._id)}>
                    🗑️ Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Inline Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#2563eb",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
  },
  addBtn: {
    padding: "10px 15px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  todoList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  todoCard: {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  todoTitle: {
    margin: "0 0 5px",
    color: "#1e293b",
  },
  todoBody: {
    margin: "0 0 10px",
    color: "#4b5563",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  updateBtn: {
    padding: "6px 10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px 10px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
