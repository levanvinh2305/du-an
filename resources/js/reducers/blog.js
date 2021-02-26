const innitialState = {
    blog: []
};
const blogReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_BLOG":
            return {
                blog: action.payload
            };

        default:
            return state;
    }
};
export default blogReducer;
