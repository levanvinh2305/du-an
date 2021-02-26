const innitialState = {
    blogdetail: {}
};
const blogDetailReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_BLOGDETAIL":
            return {
                blogdetail: action.payload
            };

        default:
            return state;
    }
};
export default blogDetailReducer;
