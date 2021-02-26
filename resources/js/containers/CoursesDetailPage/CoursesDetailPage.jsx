import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CoursesDetail from "../../components/CoursesDetail";
import { getCoursesDetailList } from "../../services/coursesDetail";

function CoursesDetailPage() {
    const dispatch = useDispatch();
    const coursesDetailList = useSelector(
        state => state.coursesDetailList.coursesdetail
    );
    const { Id } = useParams();

    useEffect(() => {
        dispatch(getCoursesDetailList(Id));
    }, [dispatch]);
    return (
        <main className="main">
            <CoursesDetail coursesdetail={coursesDetailList}/>
        </main>
    );
}

export default CoursesDetailPage;
