import React from 'react'
import { useHistory } from 'react-router';

export default function BlogCard(props) {
    const {blog} = props;
    const {name,description,_id} = blog;
    let history = useHistory();
    return (
        <div 
            className="blog-card"
            onClick={()=>history.push(`/blog/${_id}`)}
        >
            <h1>{name}, id is: {_id}</h1>
            <p>{description}</p>
        </div>
    )
}
