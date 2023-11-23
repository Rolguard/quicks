const body = document.querySelector("body");
const colourChangeButton = document.querySelector(".colour-change-button");
const hexCodeText = document.querySelector(".hexcode-colour");
const colours = ["#F4A900", "#49678D", "#CAC4B0", "#8CD867", "#ED7D3A"];
const hexCodeCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let counter = 0;
let mode = "Simple";

colourChangeButton.addEventListener("click", () => {
  if (mode === "Simple") {
    counter += 1;
    let newHexCode = colours[counter % colours.length];
    body.style.backgroundColor = newHexCode;
    hexCodeText.innerHTML = newHexCode;
  } else if (mode === "Hex") {
    let randomHexCode = "#";

    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 16);
      randomHexCode += hexCodeCharacters[randomNumber];
    }
    body.style.backgroundColor = randomHexCode;
    hexCodeText.innerHTML = randomHexCode;
  }
});

const optionsText = document.querySelectorAll(".options");
optionsText.forEach((domNode) => {
  domNode.addEventListener("click", () => {
    mode = domNode.innerHTML;
    colourChangeButton.click();
  });
});
