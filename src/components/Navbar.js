import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import '../components/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = ({scrollToRef,productRef,contactRef}) => {

    const navigate=useNavigate();
    const location=useLocation();
    const [openmenu,setmenu]=useState(false);
    
    const HandleOpenMenu=()=>{
        setmenu(!openmenu);
    }
    
    const isHome = location.pathname === '/';

    const handleScrollToAbout = () => {
        if (scrollToRef && scrollToRef.current) {
            window.scrollTo({
                top: scrollToRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleScrollToContact = () => {
        if (contactRef && contactRef.current) {
            window.scrollTo({
                top: contactRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleScrollToproduct = () => {
        if (productRef && productRef.current) {
            window.scrollTo({
                top: productRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleOnclick=(item)=>{
      if(item==="home"){
         navigate('/');
      }
      else if(item==="insta"){
        navigate('/');
      }
      else if(item==="twitter"){
        navigate('/');
      }
      else{
        
            navigate('/');
          
      }
    }
      
  return (
    <div className='w-screen relative h-auto flex justify-between items-center p-[30px] '>
        <div onClick={()=>{handleOnclick("home")}}  className='logo hover:cursor-pointer hover:scale-110 duration-200 transition-all  hidden sm:flex  text-lg font-extrabold text-green-700'>
            L O
        </div>

       { <div className='hidden sm:flex gap-[20px] items-center'>
            <div className='underline-hover text-green-700  ' onClick={handleScrollToAbout}>About us</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToproduct}>Products</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToContact}>Contact Us</div>
            <div className='sliding-background hover:cursor-pointer text-green-700 border border-green-700 p-2'>Subscribe</div>
        </div>}

        <div className='sm:hidden'>
            {openmenu ?<div className=' absolute w-[200px] bg-slate-100 rounded-md p-3 flex gap-[20px] flex-col items-center right-[20px] top-4'>

            <div className='underline-hover text-green-700 ' onClick={handleScrollToAbout}>About us</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToproduct}>Products</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToContact}>Contact Us</div>
            <div className='sliding-background hover:cursor-pointer text-green-700 border border-green-700 p-2'>Subscribe</div>

            <div className='rounded-full bg-white p-2 '>
                <IoIosClose onClick={HandleOpenMenu} />
            </div>
            </div> : <IoMdMenu  onClick={HandleOpenMenu} className='text-green-700 w-[25px] absolute right-[20px] h-[25px]'/>}
            
        </div>
    </div>
  )
}

export default Navbar;
