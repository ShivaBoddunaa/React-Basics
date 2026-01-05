import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
 
function Users() {
  const navigate = useNavigate();
 
  const [Users, setUsers] = useState([])
 
  const [page,setPage] = useState(1);
 
  const Users_PER_PAGE = 1;
 
   const fetchUsers = async () => {
        const response  = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok){
 
          const data = await response.json()
          setUsers(data)
        }
      }
  useEffect(()=>{
 
    fetchUsers();
 
  },{})
 
  //calculate slliced pages
 
  const startIndex = (page -1) * Users_PER_PAGE
  const stopIndex = startIndex + Users_PER_PAGE
 
  const visibleUsers = Users.slice(startIndex,stopIndex);
 
  return (
    <>
      <div class="row">
        <div class="col-sm-12 mb-3 mb-sm-0">
 
 
 
          {
 
            visibleUsers.map((user) => (
              <div class="card text-start">
                <div class="card-body text-start">
                  <li key={user.id} style={{ listStyleType: 'none'}}>
                    <h5 class="card-title">{user.id} . {user.name} . {user.email}</h5>
                    {
                    <p class="card-text">{user.address}</p>
                  }
                    <h5 class="card-title">{user.phone} . {user.website}</h5>{
                    <p class="card-text">{user.company}</p>
         }
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
 
export default Users;