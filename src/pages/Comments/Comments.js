import React, { useState,useEffect } from "react";
import Card from "../../components/Card";
import Comment from "../../components/Comment";
import "./Comments.css"

function Comments() {


const [user,setUser] = useState();
const [Comments,setComments] = useState();
const [isFetching,setIsFetching] = useState(false);
const [isFetchingC,setIsFetchingC] = useState(false);

    const postId = localStorage.getItem("postId");
    var posts = JSON.parse(postId);
    // console.log("post is "+posts.id)
  


    const getPost = async () => {
        setIsFetching(true)
        const getUser = await fetch(
            `https://gorest.co.in/public/v2/users/${posts?.user_id}`
        );
        const user = await getUser.json();
        // const user = await getUser;
        var temp = JSON.stringify(user);
        console.log("user Fetched is "+temp)
        setUser(user)
        setIsFetching(false)
    };

    const getComments = async ()=>{

        setIsFetchingC(true)
        const getComment = await fetch(
            `https://gorest.co.in/public/v2/comments?post_id=${posts?.id}`
            // `https://gorest.co.in/public/v2/comments?post_id=1676`
        );
        const comment = await getComment.json();
        console.log("Comments fetched are "+ comment)
        setComments(comment)
        setIsFetchingC(false)
    }

    useEffect(()=>{
        
        getPost();
    },[])
    useEffect(()=>{
        
        getComments();
    },[])
    


    return(<>
    

    <Card 
      username={user?.name}
      postTitle={posts?.title}
      postBody={posts?.body}
      userEmail={user?.email}
      userGender={user?.gender}
      fromComments={true}
      userId = {posts?.user_id}
     />

    {isFetching && (
        <div>Loading...</div>
      )}

{Comments?.length>0 ?  
            Comments?.map((data)=>{

                return(
                    <Comment
                        text={data.body}
                        name={data.name}
                        email={data.email}
                    />
                )
            })
        :<div className="noComments">No Comments yet</div>}

      
    </>)
}

export default Comments