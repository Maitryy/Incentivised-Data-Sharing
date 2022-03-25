import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShowPosts = () => {
    
    const [data,setData] = useState([]);

useEffect(async() => {
    const response = await fetch("http://localhost:5000/route/GetAllPosts");
    const da = await response.json();
    setData(da);
}, []);

useEffect( () => {
    // console.log(data);
}, [data]);

    return(
        <div>
            {data.map(post=>{
                return(      
                   
                        <div>
                            <div className="jumbotron course">
                                <h1 className="display-4">{post.title}</h1>
                                <p className="lead">{post.description} </p>
                                <hr className="my-4"/>
                             
                                    <p>Course credits : {post.keyword}</p>
                                   
                               
                            </div>
                           
                        
                        </div> 
                    )})}
        </div>
    );  
}
export default ShowPosts;