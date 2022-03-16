import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

    const [description,getDescription] = useState("");
    const [title,gettitle] = useState("");
    const [keyword,getkeyword] = useState("");
    
    const history = useNavigate();

    async function takeInfo(e){
        e.preventDefault();

        try {
            const Post = {
                title, 
                description,
                keyword
            }
            
            const y = await axios.post("http://localhost:5000/route/posts", Post);
            if(y){
                history.push('/');
            }

        } catch (err) {
            console.error(err);
        }
    }
	return (
        <div>
            <form onSubmit={takeInfo}>
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" 
                onChange = {(e) => getDescription(e.target.value)}
                    value= {description}
            />
        </div>
        <div className="mb-3">
            <label for="description" className="form-label">Description</label>
            <textarea type="text" className="form-control" id="exampleInputPassword1"
                onChange = {(e) => getDescription(e.target.value)}
                    value= {description}
            />
        </div>
        <div className="mb-3">
            <label for="keyword" className="form-label">Keyword</label>
            <textarea type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}
export default Form;