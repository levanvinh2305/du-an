const innitialState = {
    banner: []
};
const bannerReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_BANNER":
            return {
                banner: action.payload
            };

        default:
            return state;
    }
};
export default bannerReducer;
