import React from "react";
import PropTypes from "prop-types";
import ArtificialIntelligence from '../../../../public/img/ai-and-machine-learning/artificial-intelligence.jpg';
import MachineLearning from '../../../../public/img/ai-and-machine-learning/machine-learning.jpg';
import DeepLearing from '../../../../public/img/ai-and-machine-learning/deep-learing.jpg';

AIMachineLearning.propTypes = {};

function AIMachineLearning(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2>AI &amp; Machine Learning</h2>
                    <p>
                        In 2020, people benefit from artificial intelligence
                        every day: music recommender systems, Google maps, Uber,
                        and many more applications are powered with AI.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                        <div className="content">
                            <img
                                src={ArtificialIntelligence}
                                className="card-img-top"
                                alt="Artificial Intelligence"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Artificial Intelligence (AI)
                                </h5>
                                <p className="card-text">
                                    Artificial intelligence is a science like
                                    mathematics or biology. It studies ways to
                                    build intelligent programs and machines that
                                    can creatively solve problems, which has
                                    always been considered a human prerogative.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                        <div className="content">
                            <img src={MachineLearning} className="card-img-top" alt="Machine Learning"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Machine Learning (ML)
                                </h5>
                                <p className="card-text">
                                    Machine learning is a subset of artificial
                                    intelligence (AI) that provides systems the
                                    ability to automatically learn and improve
                                    from experience without being explicitly
                                    programmed. In ML, there are different
                                    algorithms (e.g. neural networks) that help
                                    to solve problems.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                        <div className="content">
                            <img src={DeepLearing} className="card-img-top" alt="Deep Learning"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Deep Learning (DL)
                                </h5>
                                <p className="card-text">
                                    Deep learning, or deep neural learning, is a
                                    subset of machine learning, which uses the
                                    neural networks to analyze different factors
                                    with a structure that is similar to the
                                    human neural system.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AIMachineLearning;
