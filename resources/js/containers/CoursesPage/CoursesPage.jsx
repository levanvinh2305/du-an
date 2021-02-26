import { set } from "lodash";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import CleanCodeSaturday from "../../components/CleanCodeSaturday";

import Courses from "../../components/Courses";
import CoursesDetail from "../../components/CoursesDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getCoursesList } from "../../services/courses";
import { getCoursesDetailList } from "../../services/coursesDetail";
import CoursesDetailPage from "../CoursesDetailPage/CoursesDetailPage";

function CoursesPage() {
    let { path, url } = useRouteMatch();
    const dispatch = useDispatch();

    const coursesList = useSelector(state => state.coursesList.courses);

    useEffect(() => {
        dispatch(getCoursesList());
    }, [dispatch]);

    return (
        <main className="main">
            <Header/>
            <Switch>
                <Route exact path={path}>
                    <Courses courses={coursesList}/>
                </Route>
                <Route path={`${path}/:Id`}>
                    <CoursesDetailPage/>
                </Route>
            </Switch>
            <Footer/>
            <CleanCodeSaturday/>
        </main>
    );
}

export default CoursesPage;
