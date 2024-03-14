const layeredDiscountTotal = quantity =>{
    let first100Price = 100;
    let second100Price = 90;
    let above200Price = 70;

    if (quantity <= 100) {
        const total = first100Price * 100;
        return total;
    }else if (quantity <= 200) {
        const first100TotalPrice = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotalPrice = remainingQuantity * second100Price;
        const total = first100TotalPrice + remainingTotalPrice;
        return total;
    }else{
        const first100TotalPrice = first100Price * 100;
        const second100TotalPrice = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotalPrice = above200Price * remainingQuantity;
        const total = first100TotalPrice + second100TotalPrice + remainingTotalPrice;
        return total;
    }
}

console.log(layeredDiscountTotal(100));