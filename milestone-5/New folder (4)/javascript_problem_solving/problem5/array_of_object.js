const products = [
    {id:1,name:'lenvo',price:50000},
    {id:2,name:'dell',price:44000},
    {id:3,name:'hp',price:70000},
    {id:4,name:'map',price:150000}
]

//map

const productsName = products.map(product =>product.name );
const productsPrice = products.map(product => product.price)

// forEach
// products.forEach(p => console.log(p.id));


// filter
const highPriceProduct = products.filter((product) => product.price > 50000);


// find
const lowPriceProduct = products.find(product => product.price < 50000);


// reduce
const totalPrice = products.reduce((previous,current)=>previous+current.price,0)
console.log(totalPrice);