import React,{useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card";
import Posts from "./pages/posts/Posts";
import MainRouter from "./Router";

import './App.css';

function App() {



  return (
    <div className="App">
     <div>FreshReview</div>
     <MainRouter/>
     
    </div>
  );
}

export default App;
