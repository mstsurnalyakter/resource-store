import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("products.json");
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  // console.log(products);

  const handleAddToCart = product =>{
    const isExist = cartItem.find(cart => cart.id === product.id);
    if (isExist) {
      alert("Already Exist this product in cart")
    }else{
      setCartItem([...cartItem,product]);
      console.log(cartItem);
    }
  }

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* left section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:col-span-3">
          {products?.map((product) => {
            const { img, alt, price, name, ratings, discountPrice } = product;
            return (
              <div key={product?.id} className="card  bg-base-100 shadow-xl">
                <figure>
                  <img src={img} alt={alt} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name:{name}</h2>
                  <h3 className="text-xl font-semibold">
                    <span>{price}$</span> , <span>{discountPrice}$</span>
                  </h3>
                  <h3 className="text-xl font-semibold">Rating:{ratings}</h3>
                  <div className="card-actions justify-end">
                    <button
                      onClick={()=>handleAddToCart(product)}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        {/* right section */}
        <section>
          <h3 className="text-xl font-bold text-center mb-4">
            Total Cart Item
          </h3>
          <p>Total Price: 0</p>
          <div className="card  bg-base-100 shadow-xl p-2">
            <table className="table-auto border w-full text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem?.map(cart =>{
                    const {name,price} = cart;
                    return (
                      <tr key={cart?.id}>
                        <td>{name}</td>
                        <td>{price}$</td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
