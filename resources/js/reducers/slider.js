const innitialState = {
    slider: []
};
const sliderReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_SLIDER":
            return {
                slider: action.payload
            };

        default:
            return state;
    }
};
export default sliderReducer;
