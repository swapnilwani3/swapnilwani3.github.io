import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import blogData from './data/blogData';

export default function Home() {
    const [blogs,setBlogs] = useState();
    useEffect(()=>{
        setBlogs(blogData);
    },[]);
    return (
        <div>
        <h1>Blogs</h1>
        <div className="blogs">
            {blogs && blogs.map((blog)=>(
                <BlogCard blog={blog} Key={blog._id}/>
            ))}
        </div>
    </div>
    )
}
