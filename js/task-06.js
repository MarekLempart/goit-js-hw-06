const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
  const length = validationInput.dataset.length;
  if (validationInput.value.length === Number(length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

// const validationInput = document.getElementById("validation-input");

// validationInput.addEventListener("blur", () => {
//   const length = validationInput.dataset.length;
//   if (validationInput.value.length === Number(length)) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// });
