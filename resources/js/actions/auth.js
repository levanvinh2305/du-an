import { userConstants } from "../constant/user";
import { userService } from "../services/user";
import { alertActions } from "./alert";
import { history } from "../helpers/history";

const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));

    return userService
      .login(username, password)
      .then((user) => {
        dispatch(success(user));
        // console.log("user", user);
        localStorage.setItem("token", user.data.token);
        history.push("/");
        // dispatch(login(user));
        dispatch(alertActions.success("Login successful"));

        setTimeout(function () {
          dispatch(alertActions.clear());
        }, 1500);
      })
      .catch((e) => {
        const error = {
          message: e?.errors?.message || "Lỗi không xác định",
        };
        dispatch(failure(error));
      });
  };

  function request(payload) {
    return { type: userConstants.LOGIN_REQUEST, payload };
  }
  function success(payload) {
    return { type: userConstants.LOGIN_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: userConstants.LOGIN_FAILURE, payload };
  }
};

const register = (user) => {
  return (dispatch) => {
    dispatch(request(user));

    return userService
      .register(user)
      .then((user) => {
        dispatch(success(user));
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
        setTimeout(function () {
          dispatch(alertActions.clear());
        }, 1500);
      })
      .catch((e) => {
        const error = {
          message:
            e?.errors.phone ||
            e?.errors.username ||
            e?.errors.password ||
            e?.errors.email ||
            "Lỗi không xác định",
        };
        dispatch(failure(error));
      });
  };

  function request(payload) {
    return { type: userConstants.REGISTER_REQUEST, payload };
  }
  function success(payload) {
    return { type: userConstants.REGISTER_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: userConstants.REGISTER_FAILURE, payload };
  }
};

const getAll = () => {
  return (dispatch) => {
    dispatch(request());
    userService
      .getAll()
      .then(
        (user) => dispatch(success(user))
        // (error) => dispatch(failure(error.toString()))
      )

      .catch((e) => {
        const error = {
          message: e?.errors?.message || "Lỗi không xác định",
        };
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(payload) {
    return { type: userConstants.GETALL_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: userConstants.GETALL_FAILURE, payload };
  }
};

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

export const userActions = {
  login,
  register,
  getAll,
  logout,
};

