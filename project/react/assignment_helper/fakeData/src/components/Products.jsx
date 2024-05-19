import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Product from './Product';


const Products = ({ handleAddToCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("fakeData.json");
      if (!res.ok) {
        throw new Error("Failed to fetch products data");
      }

      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="lg:col-span-3">
      <h2>Products:{products.length}</h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </div>
  );
};

Products.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Products