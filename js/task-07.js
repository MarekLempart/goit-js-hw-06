const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});

// const fontSizeControl = document.getElementById("font-size-control");
// const text = document.getElementById("text");

// fontSizeControl.addEventListener("input", () => {
//   text.style.fontSize = `${fontSizeControl.value}px`;
// });
