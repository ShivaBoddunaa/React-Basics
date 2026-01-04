import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [posts, setposts] = useState([])
  
  const [page,setPage] = useState(1);

  const POSTS_PER_PAGE = 10;

   const fetchPosts = async () => {
        const response  = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok){

          const data = await response.json()
          setposts(data)
        }
      }
  useEffect(()=>{

    fetchPosts();

  },{})

  //calculate slliced pages

  const startIndex = (page -1) * POSTS_PER_PAGE
  const stopIndex = startIndex + POSTS_PER_PAGE

  const visiblePosts = posts.slice(startIndex,stopIndex);

  return (
    <>
      <div class="row">
        <div class="col-sm-12 mb-3 mb-sm-0">



          {

            visiblePosts.map((post) => (
              <div class="card text-start">
                <div class="card-body text-start">
                  <li key={post.id} style={{ listStyleType: 'none'}}>
                    <h5 class="card-title">{post.id} . {post.title} </h5>
                    <p class="card-text">{post.body}</p>
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

export default App
