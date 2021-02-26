import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "../Card";

Courses.propTypes = {
    courses: PropTypes.array,
    onCoursesClick: PropTypes.func
};
Courses.defaultProps = {
    courses: [],
    onCoursesClick: () => {}
};
function Courses(props) {
    let { url } = useRouteMatch();
    const { courses, onCoursesClick } = props;

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">
                            <h1>Courses</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {courses.map(courses => (
                        <div className="col-md-4" key={courses.id}>
                            <Card
                                // to={`${url}/${courses.alias}`}
                                to={'#'}
                                image={courses.image}
                                title={courses.name}
                                description={courses.summary}
                                textleft={courses.author}
                                textright={courses.price}
                                onClick={onCoursesClick}
                            ></Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
