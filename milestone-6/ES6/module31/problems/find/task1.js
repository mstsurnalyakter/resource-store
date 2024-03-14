//Employee Management System: Find an employee by their employee ID.

const employees = [
    {name:'X',id:1, salary:100000},
    {name:'Y',id:2, salary:150000},
    {name:'Z',id:3, salary:200000},
]

const foundEmployee = employees.find(employee => employee.id === 2);


//Inventory Management: Find a product by its unique SKU (Stock Keeping Unit) number.
const products = [
  { SKU: 1, name: "Laptop", price: 999.99 },
  { SKU: 2, name: "Phone", price: 599.99 },
  { SKU: 3, name: "Tablet", price: 399.99 },
];
const foundProduct = products.find(product => product.SKU === 2);

