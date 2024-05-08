import React, { useEffect, useState } from 'react'
import Featured from './Dropdowns/Featured'
import axios from 'axios';
import ProductCard from '../component/ProductCard';


const NewArivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('http://localhost:8080/products');
              setProducts(response.data);
          } catch (error) {
              console.error('Failed to fetch products:', error);
          }
      };

      fetchProducts();
  }, []);
  const NewArivals = products.filter((product) => product.product_type === 'NewArRivals');

  return (
    <div className='grid md:grid-cols-3 grid-cols-2'>
  
    <div className=" h-32 w-full bg-neutral-500 justify-center flex items-center col-span-3">
      <h1 className="text-white text-xl text-center justify-center flex font-semibold">
       New Arrivals
      </h1>
    </div>
    <div className='md:col-span-3 col-span-2 mt-10 flex justify-between'>
      <div className='md:ml-[500px]'> 
        <div className="flex gap-3">
          <button className="border-[1px] p-[2px] md:hidden  border-neutral-500">
            <div className="h-5 w-5 bg-neutral-500 hover:bg-black"></div>
          </button>
              <button className="border-[1px] p-[2px] flex gap-1 border-neutral-500 group ">
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              </button>

              <button className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              </button>

              <button className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              </button>
            </div></div> 
      <div className='mr-20'><Featured/></div>
      </div>


    <div className='col-span-3 flex justify-between mt-10 grid-rows-4'>
         <div className='row-span-3 justify-start'>
         <div className="mb-4 ml-10  ">
  <label className="block text-sm font-medium text-gray-600">Product Size:</label>
  <div className="flex flex-col items-center overflow-scroll h-60 w-52">
      {['36/4', '37/5', '38/6', '39/5', '39/7', '40/6', '40/8', '41/7', '41/9', '42/8', '43/9', '44/10', '45/11'].map((size) => (
          <div key={size} className="flex items-center mr-4">
              <input 
                  type="checkbox" 
                  id={size} 
                  name={size} 
                  value={size} 
                  className="mr-2"
              />
              <label htmlFor={size}>{size}</label>
          </div>
      ))}
  </div>
</div>
         </div>
         <div>
         <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Display only exclusive products */}
              {NewArivals.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
         </div>
    </div>
  </div>
  )
}

export default NewArivals;