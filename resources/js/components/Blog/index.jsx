import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

Blog.propTypes = {
    blog: PropTypes.array,
    onBlogClick :PropTypes.func,
};
Blog.defaultProps = {
    blog: [],
    onBlogClick : null
};
function Blog(props) {
    let {  url } = useRouteMatch();
    const { blog, onBlogClick } =props ;

    function handleClick(blog){
        if(onBlogClick){
            onBlogClick(blog)
        }
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">
                            <h1>Blog</h1>
                        </div>
                    </div>
                </div>
                 <div className="row">
                     {blog.map(blog =>(
                        <div className="col-md-4" key={blog.alias}>
                            <div className="card">
                                <Link to={`${url}/${blog.alias}`}>
                                    <img src={blog.image} className="card-img-top" alt={blog.name} onClick={()=>handleClick(blog)} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.name}</h5>
                                    <p className="card-text">{blog.summary}</p>
                                </div>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
         </div>
    );
}

export default Blog;
