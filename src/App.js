import React from 'react';
import {Navbar} from './component/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Summer from './pages/Summer';
import  MenProduct  from './pages/MenProduct';
import WomenProduct from './pages/WomenProduct';
import ExclusiveSale from './pages/ExclusiveSale';
import NewArivals from './pages/NewArivals';
import { Home } from './pages/Home';
import  Footer  from './component/Footer';
import ProductDetail from './pages/ProductDetail';
import SignUp from './Register/SignUp';
import Login from './Register/Login';

 
// ExclusiveSale

function App() {
  
 
  return (
   <>
    <BrowserRouter>
     <Navbar/> 
     {/* <ProductList/> */}
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Summer' element={<Summer/>}/>
      <Route path='/NewArivals' element={<NewArivals/>}/>
      <Route path='/MenProduct' element={<MenProduct/>}/>
      <Route path='/WomenProduct' element={<WomenProduct/>}/>
      <Route path='/Exclusive' element={<ExclusiveSale/>}/>
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>


    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
