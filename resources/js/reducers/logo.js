const innitialState = {
    logo: []
};
const logoReducer = (state = innitialState, action) => {
    switch (action.type) {
        case "GET_LOGO":
            return {
                logo: action.payload
            };

        default:
            return state;
    }
};
export default logoReducer;
