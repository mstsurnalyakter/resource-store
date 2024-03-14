const cards = document.querySelectorAll(".common-card");
const costBtns = document.querySelectorAll(".costBtn");

let cartCount = 1;
let totalCost = 0;
let grandCost = 0;


const findElementById = (id) => {
  return document.getElementById(id);
};

for (const card of cards) {
  card.addEventListener("click", () => {
    const title = card.querySelector("h2").innerText;
    const price = parseFloat(card.querySelector("span").innerText);
    updatedInnerText("cart", cartCount);
    cartCount++;
    createNewElement("title-price-container", "span", title, price.toFixed(2));




  });
}

const updatedInnerText = (id, value) => {
  findElementById(id).innerText = value;
};

const totalCostCalc = (price) => {
 totalCost += price;
  updatedInnerText("total-cost", totalCost);
  
};




const createNewElement = (parentId, newElement, value1, value2) => {
  const parentElement = findElementById(parentId);
  const newCreate1 = document.createElement(newElement);
  const newCreate2 = document.createElement(newElement);
  const div = document.createElement("div");
  newCreate1.innerText = value1;
  newCreate2.innerText = value2;
  div.append(newCreate1, " ", newCreate2);
  parentElement.appendChild(div);
};
