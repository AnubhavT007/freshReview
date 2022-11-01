import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./Card.css"
import UserDetails from "./UserDetails";

function Card({username,postTitle,postBody,userEmail,userGender,postId,fromComments,userId}){
let navigate = useNavigate()



    const openComments = async ()=>{
        const response = await fetch(
            `https://gorest.co.in/public/v2/posts?id=${postId}`
        );
        const data = await response.json();
        
        const store = JSON.stringify(data[0])
        localStorage.setItem("postId",store)
        
        let path = `comments`;
        navigate(path);
    }

    return(
        <>
        <div className="post">
            <div className="post__top">
                
                
                <div className="post__topInfo">
                <h3>{postTitle}</h3>
                
                </div>
            </div>

            <div  className="post__bottom">
                <p>{postBody}</p>
            </div>

            {/* <div className="post__options">
                <div className="post__option">
                    
                    <p>{username}</p>
                </div>
                <div className="post__option">
                    
                    <p>{userEmail}</p>
                </div>
                <div className="post__option">
                    
                    <p>{userGender}</p>
                </div>
                
            </div> */}
            <div className="post__options">
                
                <UserDetails
                userId={userId}
                />
            </div>

            {fromComments!==true?
            <div className="post__option__bottom" onClick={()=>openComments()}>
                View Comments
            </div> : <div></div>}

        </div>
        </>
    )
}

export default Card