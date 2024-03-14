const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener("click", () => {
  if (subhanAllahInitialValue === 33) {
    return alert(`Subhan Allah Complete.Please Fillup another one.`);
  }

  subhanAllahInitialValue++;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAllahDecrimentBtn.addEventListener("click", () => {
  if (subhanAllahInitialValue === 0) {
    return alert(`You can added negative value.`);
  }
  subhanAllahInitialValue--;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

alhamdulillahIncrimentBtn.addEventListener("click", () => {
  if (alhamdulillahInitialValue === 33) {
    return alert("Alhamdulila Complete. Please Fillup another one.");
  }

  alhamdulillahInitialValue++;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

alhamdulillahDecrimentBtn.addEventListener("click", () => {
  if (alhamdulillahInitialValue === 0) {
    return alert("You can added negative value.");
  }

  alhamdulillahInitialValue--;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

allahAkberIncrimentBtn.addEventListener("click", () => {
  if (allahAkberInitialValue === 34) {
    return alert("Allah Akber Complete. Please Fillup anther one.");
  }
  allahAkberInitialValue++;
  allahAkberDisplay.innerText = allahAkberInitialValue;
});

allahAkberDecrimentBtn.addEventListener("click", () => {
  if (allahAkberInitialValue === 0) {
    return alert(`You can added negative value.`);
  }

  allahAkberInitialValue--;
  allahAkberDisplay.innerText = allahAkberInitialValue;
});

resetBtn.addEventListener("click", () => {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahAkberDisplay.innerText = 0;
  subhanAllahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  allahAkberInitialValue = 0;
});
