const innitialState = {
    family: [],
};
const familyReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_FAMILY":
            return {
                family: action.payload,
            };

        default:
            return state;
    }
};
export default familyReducer;
