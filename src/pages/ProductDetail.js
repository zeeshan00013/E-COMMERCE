import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'; // Import axios for making HTTP requests

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.product.product);
  console.log(productDetail);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = async () => {
    try {
      // Send a POST request to your server to add the product to the cart
      const response = await axios.post('/add-to-cart', {
        productId: productDetail._id, // Pass the product ID to the server
        quantity: count // Pass the quantity of the product
      });

      console.log(response.data.message); // Log success message
    } catch (error) {
      console.error('Failed to add product to cart:', error.response.data.error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10 gap-7">
        <div>
          <img src={`http://localhost:8080${productDetail.product_picture}`} alt="" className="w-[600px] h-96" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{productDetail.product_name}</h2>
          <p className="text-red-600 text-xl flex flex-col gap-2 sm:flex-row">
            <del className="text-gray-600">
              Rs.
              {parseFloat(productDetail.product_discount) +
                parseFloat(productDetail.product_price)}
            </del>{" "}
            Rs.{productDetail.product_price}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex border-2 items-center gap-3 p-0">
              <button className="text-4xl font-medium" onClick={decrement}>
                -
              </button>
              <p className="font-medium text-lg"> {count}</p>
              <button className="text-3xl font-medium" onClick={increment}>
                +
              </button>
            </div>
            <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md shadow-md transition duration-300" onClick={addToCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
