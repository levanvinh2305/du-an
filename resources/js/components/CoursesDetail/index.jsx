import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

CoursesDetail.propTypes = {
    coursesdetail: PropTypes.object,
};
CoursesDetail.defaultProps = {
    coursesdetail: {},
};

function CoursesDetail(props) {
    let { Id } = useParams();
    const { coursesdetail  } = props;
    return (
        <div className="page-detail">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">
                            <h1>{coursesdetail.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="content">
                            <p>{coursesdetail.description}</p>
                            <p>{coursesdetail.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesDetail;
