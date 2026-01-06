import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
 
function Albums() {
  const navigate = useNavigate();
 
  const [Albums,setAlbums] = useState([])
 
  const [page,setPage] = useState(1);
 
  const Albums_PER_PAGE = 20;
 
   const fetchAlbums = async () => {
        const response  = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (response.ok){
 
          const data = await response.json()
          setAlbums(data)
        }
      }
  useEffect(()=>{
 
    fetchAlbums();
 
  },{})
 
  //calculate slliced pages
 
  const startIndex = (page -1) * Albums_PER_PAGE
  const stopIndex = startIndex + Albums_PER_PAGE
 
  const visibleAlbums = Albums.slice(startIndex,stopIndex);
 
  return (
    <>
      <div class="row">
        <div class="col-sm-12 mb-3 mb-sm-0">
 
 
 
          {
 
            visibleAlbums.map((album) => (
              <div class="card text-start">
                <div class="card-body text-start">
                  <li key={album.id} style={{ listStyleType: 'none'}}>
                    <h5 class="card-title">{album.userid} . {album.id}</h5>
                    <p class="card-text">{album.title}</p>
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
 
export default Albums;