const button = (btnId) =>{
    return document.getElementById(btnId);;
}

button("triangleBtn").addEventListener('click',()=>{
    const base = getInputFieldById("triangle-base");
    const height = getInputFieldById("triangle-height");

    const area = 0.5 * base * height;
    setInnerText("triangle-area",area);
});

button("rectangleBtn").addEventListener("click", () => {
  const width = getInputFieldById("rectangle-width");
  const length = getInputFieldById("rectangle-length");

  const area = width * length;
  setInnerText("rectangle-area", area);
});

button("parallelogramBtn").addEventListener("click", () => {
  const base = getInputFieldById("parallelogram-base");
  const height = getInputFieldById("parallelogram-height");

  const area = base * height;
  setInnerText("parallelogram-area", area);
});

button("rhombusBtn").addEventListener("click", () => {
  const d1 = getInputFieldById("rhombusD1");
  const d2 = getInputFieldById("rhombusD2");

  const area = 0.5 * d1 * d2;
  setInnerText("rhombus-area", area);
});


button("pentagonBtn").addEventListener("click", () => {
  const pp = getInputFieldById("pentagonP");
  const bb = getInputFieldById("pentagonB");

  const area = 0.5 * pp * bb;
  setInnerText("pentagon-area", area);
});

button("ellipseBtn").addEventListener("click", () => {
  const pp = getInputFieldById("ellipseA");
  const bb = getInputFieldById("ellipseB");

  const area = 3.1416 * pp * bb;
  setInnerText("ellipse-area", area);
});


const getInputFieldById = (inputFieldId) =>{
    return parseFloat(document.getElementById(inputFieldId).value);
}

const setInnerText = (elementId, area) =>{
    return document.getElementById(elementId).innerText = area;
}