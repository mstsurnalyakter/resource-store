const cards = document.querySelectorAll(".card");
let totalPrice = 0;
let titleCount = 1;

const findElementById = (id) => {
  return document.getElementById(id);
};

const updatedInnerText = (id, text) => {
  findElementById(id).innerText = text;
};


const createNewElement = (parentId, newCreate, value) => {
  const titleContainer = findElementById(parentId);
  const newCreateElement = document.createElement(newCreate);
  newCreateElement.innerText = `${titleCount}. ${value}`;
  titleContainer.appendChild(newCreateElement);
  titleCount++;
};

for (const card of cards) {
  card.addEventListener("click", () => {
    const title = card.querySelector("h2").innerText;
    const price = parseFloat(card.querySelector("span").innerText);
    totalPrice += price;

    updatedInnerText("total-price", totalPrice.toFixed(2));
    createNewElement("title-container", "p", title);
  });
}

findElementById("applyBtn").addEventListener("click", () => {
    const couponValue = findElementById("inputField").value;
    const couponCode = couponValue.split(" ").join("").toLowerCase();

    if (totalPrice >= 200) {
         if (couponCode === "sell200") {
            const discount = totalPrice * 0.2;
            const total = totalPrice - discount;
            console.log(discount);
            updatedInnerText("discount",discount.toFixed(2));
            updatedInnerText("total",total);
         }else{
            alert('Invalid coupon code. Please provide a valid coupon code.');
         }
    }else{
        alert("Coupon code only allowed equal or above 200 dollar.")
    }


});
