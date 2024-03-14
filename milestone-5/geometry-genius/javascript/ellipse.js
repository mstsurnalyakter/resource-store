const ellipseBtn = document.getElementById("ellipseBtn");
const ellipseA = document.getElementById("ellipseA");
const ellipseB = document.getElementById("ellipseB");
const ellipseArea = document.getElementById("ellipse-area");

ellipseBtn.addEventListener("click", () => {
  const ellipseAPText = ellipseA.value;
  const ellipseBText = ellipseB.value;
  const aa = parseFloat(ellipseAPText);
  const bb = parseFloat(ellipseBText);

  const area = (3.1416) * aa * bb;
  ellipseArea.innerText = area;

  console.log(area);

  ellipseA.value = "";
  ellipseB.value = "";
});
