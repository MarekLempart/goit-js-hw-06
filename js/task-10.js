const controls = document.querySelector("#controls");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = +document.querySelector("input").value;
  createBoxes(amount);
  document.querySelector("input").value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const baseSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(div);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const controls = document.getElementById("controls");
// const createButton = controls.querySelector("[data-create]");
// const destroyButton = controls.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// createButton.addEventListener("click", () => {
//   const amount = +document.querySelector("input").value;
//   createBoxes(amount);
// });

// destroyButton.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   const baseSize = 30;
//   const fragment = document.createDocumentFragment();

//   for (let i = 0; i < amount; i++) {
//     const size = baseSize + i * 10;
//     const div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
//     fragment.appendChild(div);
//   }

//   boxesContainer.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }
