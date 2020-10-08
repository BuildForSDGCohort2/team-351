import axios from "axios";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

class AuthService {
  login = (email, password) => {
    return axios
      .post(URL + "login", {
        email,
        password,
      })
      .then((result) => {
        // if (response.data.token) {
        //   localStorage.setItem("user", JSON.stringify(response.data)); //store in localtring
        // }
        if (result.data) {
          let userData = result.data.response;
          let id = parseInt(userData.userId, 10);
          localStorage.setItem("user", id);
        }
        return result;
      });
  };

  register(username, email, password) {
    return axios.post(URL + "signup", {
      username,
      email,
      password,
    });
  }

  logout = () => {
    localStorage.removeItem("user");
  };
}

export default new AuthService();
