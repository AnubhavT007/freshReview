import React ,{useEffect, useState}from "react";
import Card from "../../components/Card";
import useWindowDimensions from "../../helper/WindowDimension";

function Posts() {

    const [value,setValue] = useState([]);
    const [page,setPage] = useState(1);
    const [isFetching,setIsFetching] = useState(false);
    const { height, width } = useWindowDimensions();



    const scrollLimit = height*0.90 ; //when 90% of page is scrolled.
    const [currentLimit,setCurrentLimit] = useState(scrollLimit);
    
    var userArray =[]
    const url = "https://gorest.co.in/public/v2/posts"

    

    const getPosts = async () => {
        setIsFetching(true)
        const response = await fetch(
            `https://gorest.co.in/public/v2/posts?page=${page}`
        );
        const data = await response.json();
        setValue([...value, ...data]);

        // setValue([...data]);


        setIsFetching(false)

    };

    

    
    function handleScroll(event) {
        
        //checking how much window has scrolled and setting flag as true if window has scrolled
        var heightBound = window.height * 0.8

        // console.log("Window height is "+height+" & boundary is "+currentLimit+ " current is "+window.scrollY)
  

        if (currentLimit < window.scrollY) {
            
            setIsFetching(true);
        } 
      }


    const getMorePosts=()=> {
        
        setPage(page+1)
        getPosts();
        
        
    }


    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(()=>{
        getPosts();
        
    },[])


    useEffect(() => {
       
        if(isFetching===true){
            console.log("calling posts " + page)
            setCurrentLimit(currentLimit+scrollLimit)
            getMorePosts();
        }
        
      }, [isFetching]);


    
    return(
    <>
    

    
    {value?.map(
        (item,index)=>{
            return(
                <>
                <Card 
                    key={item.id}
                    username="Name Full"
                    postTitle={item.title}
                    postBody={item.body}
                    userEmail="email@mail.com"
                    userGender="Gender"
                    postId={item.id}
                />
                </>
            )
        }
    )}
    {isFetching && (
        <div>Loading...</div>
      )}
        
        

    </>
    )
}

export default Posts;