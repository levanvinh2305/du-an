import { set } from "lodash";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Blog from "../../components/Blog";
import CleanCodeSaturday from "../../components/CleanCodeSaturday";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { getBlogList } from "../../services/blog";
import BlogDetailPage from "../BlogDetailPage/BlogDetailPage";

function BlogPage() {
    let { path, url } = useRouteMatch();
    const dispatch = useDispatch();

    const blogList = useSelector(state => state.blogList.blog);

    useEffect(() => {
        dispatch(getBlogList());
    }, [dispatch]);

    return (
        <main className="main">
            <Header/>
            <Switch>
                <Route exact path={path}>
                    <Blog blog={blogList} />
                </Route>
                <Route path={`${path}/:Id1`}>
                    <BlogDetailPage/>
                </Route>
            </Switch>
            <Footer/>
            <CleanCodeSaturday></CleanCodeSaturday>
        </main>
    );
}

export default BlogPage;
