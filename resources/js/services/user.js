import { authHeader } from "../helpers/auth-header";

const apiUrl = "http://127.0.0.1:8000/api";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email, password) {


  const requestOptions = {
    mode: 'no-cors',
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      // localStorage.setItem('user',user.token);

      return user;
    })
    .catch((error) => {
      console.log("lỗi");
      throw error;
    });
}

function logout() {
  // remove token from local storage to log user out

  localStorage.removeItem("token");
}

function getAll() {
  const token = localStorage.token;
  const requestOptions = {
    method: "GET",
    headers: {
      token: token,
    },
  };
  console.log(requestOptions);
  return fetch(`${apiUrl}/user/me`, requestOptions)
    .then(handleResponse)
    .catch((error) => {
      throw error;
    });
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${apiUrl}/user/register`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      console.log("sd");
      throw error;
    });
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${apiUrl}/user/${user.id}`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    console.log("text", text);

    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        //location.reload(true);
      }

      const error = data || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
