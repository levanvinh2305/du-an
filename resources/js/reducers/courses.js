const innitialState = {
    courses: []
};
const coursesReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_COURSES":
            return {
                courses: action.payload
            };

        default:
            return state;
    }
};
export default coursesReducer;
