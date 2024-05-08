import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../component/ProductCard';
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';



export default function ExclusiveSale() {
  const [products, setProducts] = useState([]);
  const [numColumns, setNumColumns]=useState(4)
  const [nav, setNav]=useState(true);

  const handleNav =()=>{
    setNav(!nav)
  }


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

const handleColumnButton=(columns)=>{
  console.log(columns);
  setNumColumns(columns)
}

const Exlusiveproduct = products.filter((product) => product.product_type === 'Exclusive');

  return (
  <div>
     <div className=" h-32 w-full bg-neutral-500 justify-center flex items-center col-span-3">
      <h1 className="text-white text-xl text-center justify-center flex font-semibold w-full">
      Exclusive Sale
      </h1>
    </div>

    <div className='mt-10 flex justify-center'>
        <div className='w-full items-center lg:hidden ml-5 z-100' onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>} 
        </div>

          <div className={!nav ?'lg:hidden fixed left-0 top-0  w-[70%] border-r bg-white h-full z-50 ':'fixed left-[100%]' } >
          <div className='flex bg-zinc-900 h-14 justify-between'>
          <div className='text-white uppercase text-lg font-bold ml-10 mt-2'>
            side bar
         </div>
                 <div className='mr-6 pt-4 z-50' onClick={handleNav}>
                  {!nav ? <AiOutlineClose className='bg-slate-50 rounded-sm' size={25}/> :  <AiOutlineMenu size={20}/>}
                </div>
          </div>
          <div className='mt-10'>   
           <div className="mb-4 ml-10 flex-col  ">
            <h2 className='text-center font-bold text-2xl w-20 justify-center border-b-4 border-black'>By Size</h2>
  <div className="flex flex-col  overflow-scroll  h-60 w-[70%] mt-5 space-y-2 border-r-4 ">
      {['36/4', '37/5', '38/6', '39/5', '39/7', '40/6', '40/8', '41/7', '41/9', '42/8', '43/9', '44/10', '45/11'].map((size) => (
          <div key={size} className="flex items-center ">
              <input 
                  type="checkbox" 
                  id={size} 
                  name={size} 
                  value={size} 
                  className="mr-2 w-6 h-6 mt-2  "
              />
              <label htmlFor={size}>{size}</label>
          </div>
      ))}
  </div>
  
</div>
</div>
   </div>
        

      <div className='space-x-2 flex md:mr-48 mr-24'>
      <button onClick={()=>{handleColumnButton(1)}} className='w-12 h-8 border-[1px] border-zinc-950 group '>
               <div className='flex justify-center gap-1'>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950'></div>
             </div>
               </button>
         
      <button onClick={()=>{handleColumnButton(2)}} className='w-12 h-8 border-[1px] border-zinc-950 group '>
               <div className='flex justify-center gap-1'>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950'></div>
           <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950'></div>
             </div>
               </button>
         <button onClick={()=>{handleColumnButton(3)}} className='w-14 h-8 border-[1px] border-zinc-950 group'>
               <div className='flex justify-center gap-1 '>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
           <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
             </div>
               </button>
               <button onClick={()=>{handleColumnButton(4)}} className='w-14 h-8 border-[1px] border-zinc-950 group sm:hidden md:block '>
               <div className='flex justify-center gap-1 '>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
           <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
            <div className='bg-slate-500 rounded-full w-3 h-3  group-hover:bg-zinc-950 group-active:bg-zinc-950'></div>
             </div>
               </button>
         
      </div>

    </div>


     <div className='flex justify-center mt-10'>
         <div className='hidden lg:block'>   
           <div className="mb-4 ml-10  ">
  <label className="block text-sm font-medium text-gray-600">by Size:</label>
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
       <div className={`grid grid-cols-${numColumns}  gap-4`}>
              {Exlusiveproduct.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
           
        </div>
    </div>
     </div>

  </div>

);
}








