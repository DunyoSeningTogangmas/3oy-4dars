let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elMan = document.querySelector(".man");
let elBike = document.querySelector(".bike");
let elCar = document.querySelector(".car");
let elAirplan = document.querySelector(".airplan");
let elCleaner = document.querySelector(".clear");
let elAll = document.querySelector(".all");
let elUlAll = document.querySelector(".ulAll");
let elbody = document.querySelector(".body");

elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = elInput.value;
  let piyoda = inputValue / 3.6;
  elMan.textContent = piyoda;

  let inputValue2 = elInput.value;
  let velosipedda = inputValue2 / 20.1;
  elBike.textContent = velosipedda;

  let inputValue3 = elInput.value;
  let moshinada = inputValue3 / 70;
  elCar.textContent = moshinada;

  let inputValue4 = elInput.value;
  let samalyotda = inputValue4 / 800;
  elAirplan.textContent = samalyotda;
});
elCleaner.addEventListener("click", function () {
  elMan.textContent = "";
  elBike.textContent = "";
  elCar.textContent = "";
  elAirplan.textContent = "";
});
elAll.addEventListener("click", function () {
  elbody.textContent = "";
});
