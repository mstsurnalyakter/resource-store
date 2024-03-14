// find element by id
const findElementById = (id) => {
  return document.getElementById(id);
};

// create new element
const createNewElement = (parentId, shapeName, value) => {
  let count = 1;
  const parentElement = findElementById(parentId);
  const p = document.createElement("p");
  p.innerHTML = `${count}. ${shapeName} Area = ${value} cm<sup>2</sup>`;
  count++;

  parentElement.appendChild(p);
};

// access input field value
const getInputValue = (id) => {
  return parseFloat(findElementById(id).value);
};

// empty input field value
const emptyInputField = (id1, id2) => {
  findElementById(id1).value = "";
  findElementById(id2).value = "";
};



const btnClick = (btnId, firstInputId, secondInputId) => {
  const firstInputValue = getInputValue(firstInputId);
  const secondInputValue = getInputValue(secondInputId);
  let area = 0;
  const valueMultiplication = firstInputValue * secondInputValue;
  if (btnId === "triangle-btn") {
    area = 0.5 * firstInputValue * secondInputValue;
    createNewElement("result-container", "Triangle", area);
  } else if (btnId === "rectangle-btn") {
    area = valueMultiplication;
    createNewElement("result-container", "Rectangle", area);
  } else if (btnId === "parallelogram-btn") {
    area = valueMultiplication;
    createNewElement("result-container", "Parallelogram", area);
  } else if (btnId === "rhombus-btn") {
    area = 0.5 * valueMultiplication;
    createNewElement("result-container", "Rhombus", area);
  } else if (btnId === "pentagon-btn") {
    area = 0.5 * valueMultiplication;
    createNewElement("result-container", "Pentagon", area);
  } else if (btnId === "ellipse-btn") {
    area = 3.1416 * valueMultiplication;
    createNewElement("result-container", "Ellipse", area);
  }

  emptyInputField(firstInputId, secondInputId);
};
