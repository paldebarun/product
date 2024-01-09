import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import productdata from '../constants/Productdata'
import { useState } from 'react'
import Productwiper from '../components/Productwiper'

const ProductPage = () => {

  const location=useLocation();
  // const product=location.state.product;
  // console.log("this is product ",product);
  // const product=;
  const [product,setproduct]=useState(location.state.product);
  console.log("this is product",product);
  
  return (
    <div>
     <Navbar  />

     <img src={product.image} />
     <div>{product.description}</div>

     <div>
      other products
    </div>
    <div className='flex flex-col'>
                <div className='w-screen h-[100px]'></div>

                {/* products slider */}

                <Productwiper />


            </div>

    </div>

    
  )
}

export default ProductPage;
