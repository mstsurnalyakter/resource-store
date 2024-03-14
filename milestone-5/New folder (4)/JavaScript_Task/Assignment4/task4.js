const findAddress = obj =>{
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const str = `${street},${house},${society} `;
    return str;
}

console.log(
  findAddress({ street: 10, house: "15A", society: "Earth Perfect" })
);
console.log(
  findAddress({ street: 10, society: "Earth Perfect" })
);
console.log(findAddress({ street: 10 }));




console.log('----------- My solve -----------');

const findAddress1 = (obj) => {
  const street = obj.street === undefined ? "__" : obj.street;

  const house = obj.house === undefined ? "__" : obj.house;
  const society = obj.society === undefined ? "__" : obj.society;
  const result = `${street},${house},${society} `;
  return result;
};

console.log(
  findAddress1({
    street: 10,
    house: "15A",
    society: "Earth Perfect",
  })
);
console.log(
  findAddress1({
    street: 10,
    society: "Earth Perfect",
  })
);
console.log(
  findAddress1({
    street: 10,
  })
);
