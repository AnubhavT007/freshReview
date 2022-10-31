import {
    BrowserRouter ,
    HashRouter,
    Route,
    Routes,
  } from "react-router-dom";

  import Posts from "./pages/posts/Posts";
  import Comments from "./pages/Comments/Comments"

  function MainRouter(){
    return (
        <>
          
          {/* <BrowserRouter> */}
          <HashRouter>
            <Routes>
              
              <Route exact path="/"  element={<Posts/>} />
                
              
              <Route path="/comments"  element={<Comments/>}/>

              
            </Routes>
            </HashRouter>
          {/* </BrowserRouter> */}
        </>
      );
  }

  export default MainRouter