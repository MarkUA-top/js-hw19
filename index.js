// Task 1
const modalButO = document.querySelector('.buttonO')
const modalButC = document.querySelector('.buttonC')
const modalBack = document.querySelector('.backdrop')
const modalBackС = document.querySelector('.js-backdrop')


modalButO.addEventListener('click', (event) => {
  modalBack.style.opacity = 1;
  modalBack.style.visibility = 'visible';
  modalBack.style.pointerEvents = 'initial';
});

modalButC.addEventListener('click', (event) => {
  modalBack.style.opacity = 0;
  modalBack.style.visibility = 'hidden';
  modalBack.style.pointerEvents = 'none';
});

// Task 2

modalBackС.addEventListener('click', (event) => {
  modalBack.style.opacity = 0;
  modalBack.style.visibility = 'hidden';
  modalBack.style.pointerEvents = 'none';
});

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

inputChange.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value) {
    textChange.textContent = value;
  } else {
    textChange.textContent = "незнайомець";
  }
});

// Task 5
const chechLenght = document.querySelector("#validation-input");

chechLenght.addEventListener("blur", (event) => {
  if (event.target.value.length > 5) {
    alert("6+");
    chechLenght.style.borderColor = "green";
  } else {
    alert("Ви не ввели");
    chechLenght.style.borderColor = "red";
  }
});

// Task 6
const abrakadabra = document.querySelector("#font-size-control");
const abrakadabra2 = document.querySelector("#text");

abrakadabra.addEventListener("input", (event) => {
  abrakadabra2.style.fontSize = abrakadabra.value + "px";
});
