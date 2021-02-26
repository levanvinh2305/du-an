const innitialState = {
    coursesdetail: {}
};
const coursesDetailReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_COURSESDETAIL":
            return {
                coursesdetail: action.payload
            };

        default:
            return state;
    }
};
export default coursesDetailReducer;
