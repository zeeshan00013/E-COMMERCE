import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';
import { FaSearch, FaShoppingCart,  } from 'react-icons/fa';
import { useSelector,useDispatch} from 'react-redux';
import {logout} from '../redux/Redux.Auth/AuthenticationAction'



export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [nav, setNav]=useState(true);
  const [cart,setCart]=useState(true);

  const { email } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
 
  const handleCart =()=>{
    setCart(!cart)
  }

  const handleNav =()=>{
    setNav(!nav)
  }


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleDropdown = (section) => {
    if (openDropdown === section) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(section);
    }
  };

  return (
    <div className='relative z-50'>
      <div className='bg-[#6e6b6c] p-2'>
        <p className='text-white text-sm text-center'>Rs.150 shipping charges - COD Available country wide</p>
      </div>
      
    
      <div className='flex items-center md:justify-between justify-between md:gap-4  md:items-stretch mt-5 h-14'>
      <div className='md:hidden ml-10 ' onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
           
           </div>
        <div className='ml-20'>
          <Link to='/'>
            <img src={logo} alt="Logo " className=' ' />
          </Link>
        </div>
        
        <div className='hidden lg:block md:flex  '>
        <ul className='hidden  md:flex space-x-8 text-base '>
        
        <li className='relative group cursor-pointer text-red-500 hover:text-[#35d3f2] duration-200'>
          <Link to="/Summer">Summer sale</Link>
          <div className='absolute left-0 top-full  w-60 h-32 bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-500 shadow-lg hidden group-hover:block z-20  duration-200 '>
          <ul className='space-y-6 px-4 py-2 mt-3 ml-3 '>
            <li>
              <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Men sale</Link>
            </li>
            <li>
              <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Women sale</Link>
            </li>
          </ul>
        </div>
        </li>
        {/* Add other list items as needed */}
        <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200'>
        <Link to="/NewArivals" className=''>New Arrivals</Link>
        <div className='absolute left-0 top-full  w-60 h-32 bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-500 shadow-lg hidden group-hover:block z-20'>
          <ul className='space-y-6 px-4 py-2 mt-3 ml-3'>
            <li>
              <Link to="/NewArivals" className='text-gray-500 hover:text-zinc-950'>Men</Link>
            </li>
            <li>
              <Link to="/NewArivals" className='text-gray-500 hover:text-zinc-950'>Women</Link>
            </li>
          </ul>
        </div>
      </li>
      
      <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200'>
<Link to="/Menproduct" className=''>men</Link>
<div className='absolute left-0 top-full  w-60 h-16 bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-500 shadow-lg hidden group-hover:block z-20'>
  <ul className='space-y-6 px-4 py-2 mt-3 ml-3 '>
    <li>
      <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Men Shoes</Link>
    </li>
  </ul>
</div>
</li>



      <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200'>
        <Link to="/WomenProduct" className=''>Women</Link>
        <div className='absolute left-0 top-full   w-60 h-16 bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-500 shadow-lg hidden group-hover:block z-20'>
          <ul className='space-y-6 px-4 py-2 mt-3 ml-3  '>
            <li className='w-[100px]'>
              <Link to="/WomenProduct" className='text-gray-500 hover:text-zinc-950'>Women shoes</Link>
            </li>
          </ul>
        </div>
      </li>


     
      <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200'>
        <Link to="/Exclusive"   className=''
           >Exclusive Line</Link>
        <div className='absolute left-0 top-full  w-60 h-32 bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-500 shadow-lg hidden group-hover:block z-20'>
          <ul className='space-y-6 px-4 py-2 mt-3 ml-3 '>
            <li className='w-[100px]'>
              <Link to="/Exclusive" className='text-gray-500 hover:text-zinc-950'>MK - ZEN</Link>
            </li>
            <li className='w-[110px]'>
              <Link to="/Exclusive" className='text-gray-500 hover:text-zinc-950'>MK - Premium</Link>
            </li>
          </ul>
        </div>
      </li>
      
      </ul>
        </div>
        {email ? (
        // User is logged in
        <div className='md:mr-10 mr-16 flex'>
          <div className='flex md:text-sm' onClick={handleCart}>
          <FaSearch className="cart-icon text-gray-600 mr-4" size={30} />
            <a href="#" className="cart-icon text-gray-600">
            {!nav ? <AiOutlineClose size={20}/> : 
             <FaShoppingCart size={30} />}
            </a>
          </div>

          <div className={!cart ? 'fixed right-0 top-0 w-[70%] lg:w-[40%] border-r bg-white h-full z-50' : 'fixed left-[100%]'}>
          <div className='flex border h-14 justify-between'>
                 <div className='text-black uppercase text-lg font-bold ml-10 mt-2'>
                     Add To Cart
                 </div>
                 <div className='mr-6 pt-4 z-50' onClick={handleCart}>
                  {!cart ? <AiOutlineClose className='bg-slate-50 rounded-sm' size={25}/> :  <AiOutlineMenu size={20}/>}
                </div>
               </div>
          </div>
        </div>
      ) : null}

      {/* Render login and signup buttons if user is not logged in */}
      {!email && (
        <div className="flex justify-center space-x-4 mr-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      )}

      {/* Render logout button if user is logged in */}
      {email && (
        <div className="flex justify-center space-x-4 mr-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded" onClick={handleLogout}>Logout</button>
        </div>
      )}

        

        {/*side bar*/}
           
          
          
        <div className={!nav ?'md:hidden fixed left-0 top-0  w-[80%] border-r bg-slate-50 h-full ':'fixed left-[100%] ' } >
          <div className=' h-16 flex justify-between bg-[#6e6b6c] border-b-2 border-[#35d3f2]'>
            <div className='ml-24 pt-4'>
            <h1 className='uppercase justify-items-center  text-lg text-slate-50 font-bold'>Menu</h1>
            </div>
          <div className='mr-6 pt-4' onClick={handleNav}>
          
          {!nav ? <AiOutlineClose className='bg-slate-50 rounded-sm' size={20}/> :  <AiOutlineMenu size={20}/>}

          </div>
          </div>
         

          <ul className='p-10 space-y-10'>
          <li className='relative group  border-b-2 p-2'>
          <div className='flex justify-between items-center '>
            <p className='cursor-pointer text-red-500  duration-200 font-bold uppercase'>  <Link to="/Summer">Summer sale</Link></p>
            <button
              onClick={() => toggleDropdown("summer")}
              className="text-zinc-950 text-3xl"
            >
              {openDropdown === "summer" ? "-" : "+"}
            </button>
          </div>
          {openDropdown === "summer" && (
            <div className=' left-0 w-full  border-gray-500 '>
              <ul className='space-y-6 px-4 py-2 mt-3'>
                <li>
                  <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Men sale</Link>
                </li>
                <li>
                  <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Women sale</Link>
                </li>
              </ul>
            </div>
          )}
        </li>





        {/* new arrivals */}
        <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200 border-b-2 p-2'>
          <div className='flex justify-between items-center'>
            <p className='cursor-pointer text-zinc-950  font-bold uppercase'><Link to="/NewArivals" >New Arrivals</Link></p>
          <button
              onClick={() => toggleDropdown("Arrivals")}
              className="text-zinc-950 text-3xl"
            >
              {openDropdown === "Arrivals" ? "-" : "+"}
            </button>
          </div>
          {openDropdown === "Arrivals" && (
           <div className='left-0 w-full  border-gray-500 '>
           <ul className='space-y-6 px-4 py-2 mt-3 ml-3'>
             <li>
               <Link to="/NewArivals" className='text-gray-500 hover:text-zinc-950'>Men</Link>
             </li>
             <li>
               <Link to="/NewArivals" className='text-gray-500 hover:text-zinc-950'>Women</Link>
             </li>
           </ul>
         </div>
          )}
      </li>  
           <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200 border-b-2 p-2'>
            <div className='flex justify-between items-center'>
             <p  className='cursor-pointer text-zinc-950  font-bold uppercase'> <Link to="/Menproduct" >men</Link></p>
            <button
              onClick={() => toggleDropdown("men")}
              className="text-zinc-950 text-3xl"
            >
              {openDropdown === "men" ? "-" : "+"}
            </button>
            </div>
            {openDropdown ==="men" && (
                <div className='left-0 w-full border-gray-500'>
                <ul className='space-y-6 px-4 py-2 mt-3 ml-3 '>
             <li>
               <Link to="/Summer" className='text-gray-500 hover:text-zinc-950'>Men Shoes</Link>
             </li>
              </ul>
             </div>
            )}
     
         </li>


              {/* women product */}
      <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200 border-b-2 p-2'>
        <div className='flex justify-between items-center'>
          <p  className='cursor-pointer text-zinc-950  font-bold uppercase'> <Link to="/WomenProduct" className=''>Women</Link></p>
          <button
              onClick={() => toggleDropdown("women")}
              className="text-zinc-950 text-3xl"
            >
              {openDropdown === "women" ? "-" : "+"}
            </button>
        </div>
        {
          openDropdown ==="women"&&(
            <div className='left-0 w-full border-gray-500'>
            <ul className='space-y-6 px-4 py-2 mt-3 ml-3  '>
              <li className='w-[100px]'>
                <Link to="/WomenProduct" className='text-gray-500 hover:text-zinc-950'>Women shoes</Link>
              </li>
            </ul>
          </div>
          )
        }
      </li>


          {/* excluisve product */}
      <li className='relative group cursor-pointer text-zinc-800 hover:text-[#35d3f2] duration-200 border-b-2 p-2'>
        <div className='flex justify-between items-center'>
          <p className='cursor-pointer text-zinc-950  font-bold uppercase'>  <Link to="/Exclusive"   className=''
           >Exclusive Line</Link></p>
            <button
              onClick={() => toggleDropdown("Exclusive")}
              className="text-zinc-950 text-3xl"
            >
              {openDropdown === "Exclusive" ? "-" : "+"}
            </button>
        </div>
        {openDropdown ==="Exclusive" && (
           <div className='left-0 w-full border-gray-500'>
           <ul className='space-y-6 px-4 py-2 mt-3 ml-3 '>
             <li className='w-[100px]'>
               <Link to="/Exclusive" className='text-gray-500 hover:text-zinc-950'>MK - ZEN</Link>
             </li>
             <li className='w-[110px]'>
               <Link to="/Exclusive" className='text-gray-500 hover:text-zinc-950'>MK - Premium</Link>
             </li>
           </ul>
         </div>
        )}
      </li>
      
        </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
