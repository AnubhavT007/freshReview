import {
    BrowserRouter ,
    
    Route,
    Routes,
  } from "react-router-dom";

  import Posts from "./pages/posts/Posts";
  import Comments from "./pages/Comments/Comments"

  function MainRouter(){
    return (
        <>
          
          <BrowserRouter>
            <Routes>
              
              <Route exact path="/"  element={<Posts/>} />
                
              
              <Route path="/comments"  element={<Comments/>}/>

              
            </Routes>
          </BrowserRouter>
        </>
      );
  }

  export default MainRouter