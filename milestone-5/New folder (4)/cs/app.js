// let count = 0;

// const allBtn = document.getElementsByClassName("add-btn");

// for (const btn of allBtn) {
//   btn.addEventListener("click", function handleSelect(event) {
//     count += 1;
//     const budget = getValue("budget");

//     const placeName = event.target.parentNode.childNodes[1].innerText;
//     const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
//     if (budget - parseInt(price) < 0) {
//       alert("Low Budget Earn Moeny");
//       return;
//     }
//     const selectedContainer = document.getElementById(
//       "selected-place-container"
//     );
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     p.innerText = placeName;

//     const p2 = document.createElement("p");
//     p2.innerText = price;

//     li.appendChild(p);
//     li.appendChild(p2);
//     selectedContainer.appendChild(li);
//     totalPrice("total-cost", price);
//     event.target.parentNode.parentNode.style.backgroundColor = "gray";
//     event.target.setAttribute("disabled", true);
//     setInnerText("budget", budget - parseInt(price));
//     setInnerText("cart-count", count);
//   });
// }

// function totalPrice(id, value) {
//   const totalCost = document.getElementById("total-cost").innerText;
//   const total = parseInt(totalCost) + parseInt(value);
//   document.getElementById("total-cost").innerText = total;
//   grandTotal("other");
// }
// function grandTotal(category) {
//   console.log(category);
//   const convertTotal = getValue("total-cost");
//   if (category == "bus") {
//     setInnerText("grand-total", convertTotal + 100);
//   } else if (category == "train") {
//     setInnerText("grand-total", convertTotal - 200);
//   } else if (category == "flight") {
//     setInnerText("grand-total", convertTotal + 500);
//   } else {
//     setInnerText("grand-total", convertTotal);
//   }
// }

// function getValue(id) {
//   const budgetInnerText = document.getElementById(id).innerText;
//   const budget = parseInt(budgetInnerText);
//   return budget;
// }

// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value;
// }

let count = 0;
const allBtn = document.getElementsByClassName("add-btn");


for (const btn of allBtn) {
  btn.addEventListener("click", (e) => {
    count++;
    updatedInnerText("cart-count", count);

    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = parseFloat(
      e.target.parentNode.childNodes[3].childNodes[1].innerText
    );

    const budget = parseFloat(findElementById("budget").innerText);

    if (budget - price < 0) {
      alert("You budget are low. Please earn more.");
      return;
    }

    updatedInnerText("budget", budget - price);

   btn.disabled = true;
   btn.style.background = 'red'

    createNewElement("selected-place-container", "p", placeName, price);

    totalCostCalc("total-cost",price);
    grandTotalCostCalc("other");

  });

}


const totalCostCalc = (id,price) => {
  let totalCost = parseFloat(findElementById(id).innerText);
  totalCost += price;
   updatedInnerText(id, totalCost);
};


const grandTotalCostCalc = (category) => {

  let totalCost = parseFloat(findElementById("total-cost").innerText);

  if (category === 'bus') {
    updatedInnerText("grand-total", totalCost + 100);
  }else if(category === 'train'){
     updatedInnerText("grand-total", totalCost - 200);
  }else if (category === "flight") {
     updatedInnerText("grand-total", totalCost + 500);
  }else{
     updatedInnerText("grand-total", totalCost);
  }


  // grandtotalCost += price;

};

const findElementById = (id) => {
  return document.getElementById(id);
};
const updatedInnerText = (id, text) => {
  findElementById(id).innerText = text;
};





const createNewElement = (parentId, newElement, placeName, price) => {
  const parentElement = findElementById(parentId);
  const li = document.createElement("li");
  const p1 = document.createElement(newElement);
  const p2 = document.createElement(newElement);

  p1.innerText = placeName;
  p2.innerText = price;
  li.append(p1, p2);
  parentElement.appendChild(li);
};
