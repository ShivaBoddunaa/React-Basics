import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
 
function Todos() {
  const navigate = useNavigate();
 
  const [Todos, setTodos] = useState([])
 
  const [page,setPage] = useState(1);
 
  const Todos_PER_PAGE = 20;
 
   const fetchTodos = async () => {
        const response  = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (response.ok){
 
          const data = await response.json()
          setTodos(data)
        }
      }
  useEffect(()=>{
 
    fetchTodos();
 
  },{})
 
  //calculate slliced pages
 
  const startIndex = (page -1) * Todos_PER_PAGE
  const stopIndex = startIndex + Todos_PER_PAGE
 
  const visibleTodos = Todos.slice(startIndex,stopIndex);
 
  return (
    <>
      <div class="row">
        <div class="col-sm-12 mb-3 mb-sm-0">
 
 
 
          {
 
            visibleTodos.map((todo) => (
              <div class="card text-start">
                <div class="card-body text-start">
                  <li key={todo.id} style={{ listStyleType: 'none'}}>
                    <h5 class="card-title">{todo.id} . {todo.userid} . {todo.completed}</h5>
                    <p class="card-text">{todo.title}</p>
                    {/* <h5 class="card-title">{user.phone} . {user.website}</h5>
                    <p class="card-text">{user.company}</p> */}
                  </li>
                </div>  
              </div>
            ))
 
          }
 
           <button onClick={() => setPage(page - 1)}
            >
            PREVIOUS
           </button>
          <button onClick={() => setPage(page + 1)}
          >
            NEXT
          </button>
 
        </div>
      </div>
    </>
 
  )
}
 
export default Todos;