// Task 3
const bodyS = document.querySelector("body");
const colorRed = document.querySelector("#red");
colorRed.addEventListener("focus", (event) => {
  bodyS.style.backgroundColor = "red";
});

const colorWhite = document.querySelector("#white");
colorWhite.addEventListener("focus", (event) => {
  bodyS.style.backgroundColor = "white";
});

const colorGreen = document.querySelector("#green");
colorGreen.addEventListener("focus", (event) => {
  bodyS.style.backgroundColor = "green";
});
// Task 4
const inputChange = document.querySelector("#name-input");
const textChange = document.querySelector("#name-output");

inputChange.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value) {
      textChange.textContent = value;
    } else {
      textChange.textContent = "незнайомець";
    }
  });