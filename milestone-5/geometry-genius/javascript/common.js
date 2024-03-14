const cards = document.getElementsByClassName("card");
const areaCalculate = document.getElementById("area-calculate");
let para = document.createElement("p");

    for (const card of cards) {
        card.addEventListener('mousemove',()=>{
           card.style.backgroundColor = 'crimson'
        })

        card.addEventListener('mouseout',()=>{
          card.style.backgroundColor = 'white'
        })
    }

const getButtonById = (btnId) => {
  const button = document.getElementById(btnId);
  return button;
};


getButtonById("triangleBtn").addEventListener("click", () => {

  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area);


  para.innerHTML +=
    `Triangle Area: ${setInnerTextById("triangle-area", area)} cm<span>2</span>`;
  areaCalculate.appendChild(para);
});

getButtonById("rhombusBtn").addEventListener("click", () => {
  const diagonal1 = getInputValueById("rhombus-diagonal1");
  const diagonal2 = getInputValueById("rhombus-diagonal2");

  const area = 0.5 * diagonal1 * diagonal2;
  setInnerTextById("rhombus-area", area);

    para.innerHTML += `Rhombus Area: ${setInnerTextById(
      "rhombus-area",
      area
    )} cm<span>2</span>`;
    areaCalculate.appendChild(para);
});

getButtonById("rectangleBtn").addEventListener("click", () => {
  const wide = getInputValueById("rectangle-wide");
  const length = getInputValueById("rectangle-length");

  const area = wide * length;
  setInnerTextById("rectangle-area", area);

   para.innerHTML += `Rectangle Area: ${setInnerTextById(
     "rectangle-area",
     area
   )} cm<span>2</span>`;
    areaCalculate.appendChild(para);


});

getButtonById("pentagonBtn").addEventListener("click", () => {
  const pp = getInputValueById("pentagonP");
  const qq = getInputValueById("pentagonQ");

  const area = 0.5 * pp * qq;
  setInnerTextById("pentagon-area", area);

    para.innerHTML += `Rectangle Area: ${setInnerTextById(
      "rectangle-area",
      area
    )} cm<span>2</span>`;
    areaCalculate.appendChild(para);
});

getButtonById("parallelogramBtn").addEventListener("click", () => {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");

  const area = base * height;
  setInnerTextById("parallelogram-area", area);

    para.innerHTML += `Rectangle Area: ${setInnerTextById(
      "rectangle-area",
      area
    )} cm<span>2</span>`;
    areaCalculate.appendChild(para);

});

getButtonById("ellipseBtn").addEventListener("click", () => {
  const aa = getInputValueById("ellipseA");
  const bb = getInputValueById("ellipseB");

  const area = 3.1416 * aa * bb;
  setInnerTextById("ellipse-area", area);

    para.innerHTML += `Rectangle Area: ${setInnerTextById(
      "rectangle-area",
      area
    )} cm<sup>2</sup>`;
    areaCalculate.appendChild(para);


});


const getInputValueById = (inputFieldId) => {
  return parseFloat(document.getElementById(inputFieldId).value);
};

const setInnerTextById = (areaId, area) => {
  return document.getElementById(areaId).innerText = area;
};
