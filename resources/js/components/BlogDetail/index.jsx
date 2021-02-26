import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
BlogDetail.propTypes = {
    blogdetail: PropTypes.object,
};
BlogDetail.defaultProps = {
    blogdetail:{}
};

function BlogDetail(props) {
    let { Id } = useParams();
    const { blogdetail } = props;

    return (
        <div className="page-detail">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">
                            <h1>{blogdetail.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="content">
                            <h3>{blogdetail.description}</h3>
                            <p>{blogdetail.full}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
