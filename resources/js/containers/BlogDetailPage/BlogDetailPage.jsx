
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetail from "../../components/BlogDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getBlogDetailList } from "../../services/blogDetail";

function BlogDetailPage() {
    const dispatch = useDispatch();
    const blogDetailList = useSelector(state => state.blogDetailList.blogdetail);
    const {Id1} = useParams();

    useEffect(() => {
        dispatch(getBlogDetailList(Id1));
    }, [dispatch]);

    return (
        <main className="main">
            <BlogDetail blogdetail={blogDetailList}/>
        </main>
    );
}

export default BlogDetailPage;
