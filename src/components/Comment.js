import React from "react";
import "./Comment.css"

function Comment(props){
    return(
        <>
            <div className="commentContainer">
                <div className="commentBody">
                    {props.text}
                </div>
                <div className="commentDetails">
                    <div className="commentName">{props.name}</div>
                    <div className="commentEmail">{props.email}</div>
                </div>
            </div>


        </>
    )
}
export default Comment