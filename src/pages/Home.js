import React, { useState } from 'react'
import banner2 from '../images/banner2.webp';
import Men from '../pages/Men'
import Women from '../pages/Women';
import premium from '../images/premium.webp';
import zen from '../images/zen.webp';
import productMen from '../images/productMen.webp';
import productWomen from '../images/productWomen.webp';
import  accessories from '../images/accessories.webp'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import best_seller_1b from '../images/best-seller-1b.webp';
import best_seller_2b from '../images/best-seller-2b.webp';
import best_seller_1c from '../images/best-seller-1c.webp';
import best_seller_2c from '../images/best-seller-2c.webp';


export const Home = () => {
    const [activeButton, setActiveButton] = useState('section1');

    const showSection = (section) => {
      setActiveButton(section);
    };
    const renderProducts = () => {
      switch (activeButton) {
        case 'section1':
          return <Men/> ;
        case 'section2':
          return <Women/>;
        default:
          return null;
      }
    };
    const settings = {
      dots: true,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
  };

  return (
    <div>

<div className=' relative flex justify-center items-center h-full'>
<button className='bg-[#93E3E6] rounded-full w-10 sm:w-20 md:w-28 lg:w-36 h-3 sm:h-5 md:h-6 lg:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-65'></button>         <img src={banner2} alt="" className='w-full' />
      </div>
      <div className='mt-10 space-y-2'>
        <h2 className='text-center text-4xl font-mono font-bold block  '>our products</h2>
        <p className='text-center font-sans text-gray-500'>top Seller's of the week</p>
      </div>

      <div className='flex flex-col  mt-10 '>
      <div className="flex justify-center space-x-2">
        <button
          className={`rounded-full text-gray-500 border-zinc-950 py-2 px-5 hover:border-[1px] ${
            activeButton === 'section1' ? 'border-[1px] text-zinc-950' : ''
          }`}
          onClick={() => showSection('section1')}
        >
          Men
        </button>
        <button
          className={`rounded-full border-zinc-950 py-2 px-5 text-gray-500 hover:border-[1px] ${
            activeButton === 'section2' ? 'border-[1px] text-zinc-950' : ''
          }`}
          onClick={() => showSection('section2')}
        >
          Women
        </button>
      </div>

         <div>
         {activeButton === 'section1' && <Men/>}
         {activeButton === 'section2' && <Women/>}

         </div>


         <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl my-10'>Exclusive Line</h1>
      <div className='flex flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <div className='w-[40%]  overflow-hidden'>
          <Link><img src={premium} alt='premium_zenbanner1' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='w-[40%] overflow-hidden'>
          <Link><img src={zen} alt='premium_zenbanner' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
      </div>
    </div>


<div className='flex flex-col items-center justify-center mb-0'>
      <h1 className='font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl my-16'>Collections</h1>
      <div className='flex flex-col md:flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <div className=' md:w-[30%]  overflow-hidden'>
          <Link><img src={productMen} alt='Men' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='md:w-[30%] overflow-hidden'>
          <Link><img src={productWomen} alt='Women' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='md:w-[30%] overflow-hidden'>
          <Link><img src={accessories} alt='Accessories' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
      </div>
    </div>

  
        <div className="container w-screen flex flex-col justify-center items-center">
            <div className="flex items-center gap-5 ">
            <span className='bg-black h-[1px] sm:w-10 md:w-20  w-5  '></span> <div className='block'> <h1 className=" font-semibold text-nowrap text-base sm:text-xl md:text-2xl lg:text-3xl my-16">Best Sellers of the Week</h1></div><span className='bg-black h-[1px] sm:w-10 md:w-20  w-5'></span>
            </div>
            <div className="w-[90%] sm:w-[95%] md:hidden ">
                <Slider {...settings}>
                    <img src={best_seller_1c} alt='week best seller' className=''  />
                    <img src={best_seller_1b} alt='week best seller' />
                </Slider>
            </div>
            <div className="w-[95%] hidden md:block">
                <Slider {...settings}>
                    <img src={best_seller_2c} alt='week best seller' className="w-full" />
                    <img src={best_seller_2b} alt='week best seller' className="w-full" />
                </Slider>
            </div>
        </div>

          
      </div>

    </div>
  )
}
