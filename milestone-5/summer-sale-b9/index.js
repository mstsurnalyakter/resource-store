let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");

for (const card of cards) {
    // console.log(card);
    card.addEventListener("click", ()=>{
        // get the title
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(
          card.querySelector("span").innerHTML.split(" ")[1]
        );

            // appending title in the title container
        const titleContainer = document.getElementById("title-container");
        const p = document.createElement("p");
        p.innerText = `${titleCount}. ${title}`;
        titleContainer.appendChild(p);
        titleCount++;


        // calculate price
        totalPrice += price;
       document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);


    })
}

const btn = document.getElementById("apply-btn");

btn.addEventListener("click", () =>{
    // get the value from input
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();

   if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
        // discount calculation
        const discountField = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        discountField.innerText = discountAmount.toFixed(2);

        //rest total after discount
        const totalField = document.getElementById("total");
        const totalAmount = totalPrice - discountAmount;
        totalField.innerText = totalAmount.toFixed(2);

        document.getElementById("input-field").value = "";
    }else{
        alert("Invalid Coupon code.")
         document.getElementById("input-field").value = "";
    }

   }else{
    alert("The coupon code is allowed above or equal to $200.");
     document.getElementById("input-field").value = "";
   }

})