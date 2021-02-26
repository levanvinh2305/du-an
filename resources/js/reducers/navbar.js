const innitialState = {
    navbar: []
};
const navbarReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_NAVBAR":
            return {
                navbar: action.payload
            };

        default:
            return state;
    }
};
export default navbarReducer;
