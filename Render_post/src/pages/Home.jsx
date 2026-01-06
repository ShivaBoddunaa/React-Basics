

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Home</h2>

      <button onClick={() => navigate("/posts")}>Posts</button>
      <br /> <br/> 

      <button onClick={() => navigate("/todos")}>Todos</button>
      <br /><br/>

      <button onClick={() => navigate("/users")}>Users</button>
      <br /><br/>

      <button onClick={() => navigate("/albums")}>Albums</button>
;

    </div>
  );
}

export default Home;





















// import { useNavigate } from "react-router-dom";


// function Home(){
//      const navigate = useNavigate();
//     return(
  

//         <div style={{ padding: "20px"}}>
//          <h2>Home</h2>

//          <button onClick={() => navigate("/posts")}> Posts</button>
//          <br/>
//          <button onClick={() => navigate("/todos")}> Todos</button>
//          <br/>
//          <button onClick={() => navigate("/users")}> Users</button>
//          <br/>



//         </div>



//     );

// }