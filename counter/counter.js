// const counterText = document.querySelector("counter-text");
const buttons = document.querySelectorAll("button");
const counterText = document.getElementById("counter-text");

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.classList.contains("decrease-button")) {
      counter -= 1;
    } else if (button.classList.contains("reset-button")) {
      counter = 0;
    } else if (button.classList.contains("increase-button")) {
      counter += 1;
    }

    if (counter > 0) {
      counterText.style.color = "green";
    } else if (counter === 0) {
      counterText.style.color = "black";
    } else {
      counterText.style.color = "red";
    }
    console.log(`Counter: ${counter}`);
    counterText.textContent = counter;
  });
});
