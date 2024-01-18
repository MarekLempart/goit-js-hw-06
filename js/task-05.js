const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (value) => {
  nameOutput.textContent = nameInput.value || "Anonymous";
});

// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", () => {
//   nameOutput.textContent = nameInput.value || "Anonymous";
// });
