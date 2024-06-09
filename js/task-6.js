const input = document.querySelector("#controls input");
const controlDiv = document.querySelector("#input");
const boxesDiv = document.querySelector("#boxes");
const createButton = document.querySelector('button[data-action ="create"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');

createButton.addEventListener("click", () => createBoxes(Number(input.value)));
destroyButton.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(quantity) {
  if (quantity < 1 || quantity > 100) {
    input.value = ""; // додав для краси, знаю що не по ТЗ :)
    boxesDiv.innerHTML = ''; // додав для краси, знаю що не по ТЗ :)
    return;
  }

  boxesDiv.innerHTML = ''; 

  for (let i = 0; i < quantity; i++) {
    const singleBox = document.createElement("div");
    const size = 30 + i * 10;
    singleBox.style.width = `${size}px`;
    singleBox.style.height = `${size}px`;
    singleBox.style.backgroundColor = getRandomHexColor();
  }

  let divSquaresCollection = "";
  for (let i = 0; i < quantity; i++) {
    const size = 30 + i * 10;
    divSquaresCollection += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }

  boxesDiv.insertAdjacentHTML("afterbegin", divSquaresCollection);
  input.value = "";
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
