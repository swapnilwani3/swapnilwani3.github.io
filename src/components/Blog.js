import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import blogData from './data/blogData'

export default function Blog() {
    const _id = useParams();
    const [blogDetails, setBlogDetails] = useState([])
    useEffect(()=>{
        setBlogDetails(blogData);
    },[]);
    const {_id: todo,title, description} = blogDetails || {};
    return (
        <div>
            <h1>{title}</h1>
            <h1>{`id is ${todo}`}</h1>
            <p>{description}</p>
        </div>  
    )
}
