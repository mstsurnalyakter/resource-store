let totalPrice = 0;
let titleCount = 1;
const cards = document.querySelectorAll(".card");

const findElementById = (id) => {
  return document.getElementById(id);
};

const updateInnerText = (id, value) => {
  findElementById(id).innerText = value;
};

for (const card of cards) {
  card.addEventListener("click", () => {
    const title = card.querySelector("h2").innerText;
    const price = parseFloat(card.querySelector("span").innerText);
    totalPrice += price;
    createList(title);
    updateInnerText("total-price", totalPrice);
  });
}

const createList = (value) => {
  const titleContainer = findElementById("title-container");
  const li = document.createElement("li");
  li.innerText = `${titleCount}. ${value}`;
  titleCount++;
  titleContainer.appendChild(li);
};

findElementById("applyBtn").addEventListener("click", () => {
  const couponText = findElementById("inputField").value;
  const couponCode = couponText.split(" ").join("").toLowerCase();

  if (totalPrice >= 200) {
    if (couponCode === "sell200") {
      const discountAmount = (totalPrice * 0.2).toFixed(2);
      const totalAmount = totalPrice - parseFloat(discountAmount);

      updateInnerText("discount", discountAmount);
      updateInnerText("total", totalAmount);

      findElementById("inputField").value = "";

    }else{
        alert('Invalid Coupon Code. Please provide valid coupon code.')
        findElementById("inputField").value = "";
    }
  } else {
     alert("This coupon code only available equal or above 200 dollar.");
     findElementById("inputField").value = "";
  }
});


findElementById("purchaseBtn").addEventListener("click",()=>{
    if (totalPrice > 0) {
        updateInnerText("congratulation-mess", "Congratulations!");
        updateInnerText("purchase-mass", "Your Purchase the product");
        findElementById("congratulation-mess").style.color = "#E527B2";
        findElementById("purchase-mass").style.color = "#E527B2";
    }else{
        updateInnerText("congratulation-mess", "Sorry!!");
        updateInnerText("purchase-mass", "Your are not Purchase any product");

        findElementById("congratulation-mess").style.color = "red";
        findElementById("purchase-mass").style.color = "red";
    }

    setTimeout(() => {
      location.reload();
    }, 5000);
});
