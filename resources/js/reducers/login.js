import { userConstants } from "../constant/user";

const initialState = {
  loading: false,
  error: "",
  user: {},
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
        user: action.payload.data,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload.data,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload?.message,
      };
    default:
      return state;
  }
}
