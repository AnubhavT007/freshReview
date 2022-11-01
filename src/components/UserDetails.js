import React, { useState,useEffect } from "react";

function UserDetails({userId}){

const [userData,setUserdata] = useState({});
var user={};

const getUser = async () => {
    
    const response = await fetch(
        `https://gorest.co.in/public/v2/users/${userId}`
    );
    const data = await response.json();
    setUserdata(data);
    user = data;
    


};
useEffect(()=>{
    getUser();
    
},[])
var temp = JSON.stringify(userData);
// console.log("final user Value is "+ temp)

    return(
        <>
        <div className="post__option">
                    
            <p>{userData.name}</p>
        </div>
        <div className="post__option">
            
            <p>{userData.email}</p>
        </div>
        <div className="post__option">
            
            <p>{userData.gender}</p>
        </div>
        {/* <div>User id is {userId}</div> */}
        </>
    )
}

export default UserDetails