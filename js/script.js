const userInput = document.querySelector("#unit");
const providedUnitSpans = document.querySelectorAll(".provided-unit");
const alertSpan = document.querySelector("#alert");

// Spans
const calcFeet = document.querySelector(".calc-feet");
const calcMeters = document.querySelector(".calc-meters");
const calcGallon = document.querySelector(".calc-gallon");
const calcLitter = document.querySelector(".calc-liter");
const calcPounds = document.querySelector(".calc-pounds");
const calcKilos = document.querySelector(".calc-kilos");

// Btn
const convertBtn = document.querySelector("button");

// Calc Functions
const feetToMeters = (input) => Number(input) * 0.3048;
const metersToFeet = (input) => Number(input) * 3.28084;
const literToGallon = (input) => Number(input) * 0.264172;
const gallonToLiter = (input) => Number(input) * 3.78541;
const poundsToKilos = (input) => Number(input) * 0.453592;
const kilosToPounds = (input) => Number(input) * 2.20462;

userInput.value = 0;

convertBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alertSpan.style.display = "block";
    providedUnitSpans.forEach((el) => (el.textContent = 0));
    setTimeout(() => {
      userInput.value = 0;
      alertSpan.style.display = "none";
    }, 3000);
    return;
  }
  providedUnitSpans.forEach((el) => (el.textContent = userInput.value));
  calcFeet.textContent = metersToFeet(userInput.value).toFixed(3);
  calcMeters.textContent = feetToMeters(userInput.value).toFixed(3);
  calcGallon.textContent = literToGallon(userInput.value).toFixed(3);
  calcLitter.textContent = gallonToLiter(userInput.value).toFixed(3);
  calcPounds.textContent = kilosToPounds(userInput.value).toFixed(3);
  calcKilos.textContent = poundsToKilos(userInput.value).toFixed(3);
  setTimeout(() => {
    userInput.value = 0;
    alertSpan.style.display = "none";
  }, 3000);
});
