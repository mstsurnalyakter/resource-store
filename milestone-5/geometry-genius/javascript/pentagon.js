const pentagonBtn = document.getElementById("pentagonBtn");
const pentagonP = document.getElementById("pentagonP");
const pentagonQ = document.getElementById("pentagonQ");
const pentagonArea = document.getElementById("pentagon-area");


pentagonBtn.addEventListener("click", () => {
  const pentagonPText = pentagonP.value;
  const pentagonQText = pentagonQ.value;
  const pp = parseFloat(pentagonPText);
  const qq = parseFloat(pentagonQText);


    const area = 0.5 * pp * qq;
    pentagonArea.innerText = area;

    pentagonP.value = "";
   pentagonQ.value = "";

});
