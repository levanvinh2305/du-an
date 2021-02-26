import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyItems } from "../../services/family";
import Card from "../Card";

function Family() {
    const dispatch = useDispatch();
    const familyItems = useSelector(state => state.familyItem.family);

    useEffect(() => {
        dispatch(getFamilyItems());
    }, [dispatch]);

    return (
        <div className="family">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>We're a Family</h2>
                    </div>
                </div>
                <div className="row">
                    {familyItems.map(family=> (
                        <div key={family.id} className="col-md-3">
                            <Card
                                to={'#'}
                                title={family.fullname}
                                image={family.image}
                                description={family.description}
                                textleft={family.nickname}
                                textright={family.role}>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Family;
