export const loginAction = (userData) => (dispatch) => {
    fetch("/login", {
      method: "POST",
      body: userData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  