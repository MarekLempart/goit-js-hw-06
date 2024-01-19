const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", loginSubmit);

function loginSubmit(event) {
  event.preventDefault();
  const loginForm = event.target;
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`Email: ${email}, Password: ${password}`);
  loginForm.reset();
}

// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(loginForm);
//   const formObject = {};
//   formData.forEach((value, key) => {
//     formObject[key] = value;
//   });

//   console.log(formObject);
//   loginForm.reset();
// });
