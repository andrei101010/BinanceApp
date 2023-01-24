// Login Action
export const loginAction = (userData) => (dispatch) => {
  fetch("http://localhost:4000/api/login", {
    method: "POST",
    body: userData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

// Signup Action
export const registerAction = (userData) => (dispatch) => {
  fetch("http://localhost:4000/api/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
