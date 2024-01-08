import React from 'react'
import Navbar from '../components/Navbar';
import bgimage from '../images/pawel-czerwinski-lWBZ01XRRoI-unsplash.jpg'
import './Home.css'
import Productwiper from '../components/Productwiper';
import aboutpagebackgrounde from '../images/aboutpagebackground.png'
import { useRef } from 'react';
import Footer from '../components/Footer';
import LogoText from '../constants/LogoText';
import {motion} from 'framer-motion'

const Home = () => {

    const fadeInAnimationVariants={
        initial:{
          opacity:0,
          y:100,
        },
        animate:(index)=>(
          {
            opacity:1,
            y:0,
            transition:{
              duration:0.7,
              delay:0.05*index,
            },
          }),
        
      }
    const aboutRef = useRef(null);
    const productRef=useRef(null);

    return (
        <div className='px-3 overflow-x-hidden'>
           {/* Navigation bar */}
            <Navbar scrollToRef={aboutRef} productRef={productRef} />
            {/* introsection */}
            <div className='Introsection p-2 flex   w-[10/12] gap-[20px] h-[500px]  flex-col justify-center items-center  '>
                {/* intro text */}
                {/* <div className='font-bold t text-4xl h-auto sm:text-8xl text-green-700'>
                LOMBOK</div> */}
                <div className='flex font-bold t text-4xl h-auto sm:text-8xl text-green-700'>
                    {
                        LogoText.map((character,index)=>(
                          <motion.div
                          variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
                          >{character}</motion.div>
                        ))

                    }
                </div>
                <div className='text-green-700'>HOLISTIC HEALTH</div>
                <div className='w-[100px] sm:w-[200px] h-[5px] rounded-xl bg-green-700'></div>



            </div>
             {/* product section */}
            <div ref={productRef} className='w-screen h-[200px] items-center justify-center flex py-3 flex-col gap-[15px]'>

                <div className='text-3xl text-green-700'>OUR PRODUCTS</div>
                <div className='w-[100px] h-[5px] rounded-lg bg-green-700'></div>
            </div>

            <div className='flex flex-col'>
                <div className='w-screen h-[100px]'></div>
              
              {/* products slider */}

                <Productwiper />


            </div>
            <div className='w-screen h-[200px]'>

            </div>
            {/* about us section */}
            <div ref={aboutRef} className='flex h-auto md:flex-row  md:h-[500px] flex-col md:gap-0 gap-[15px]'>
                <div className='md:w-6/12 h-full '>
                    <img src={aboutpagebackgrounde} className='w-full h-full' />
                </div>

                <div className='flex w-full md:w-6/12  flex-col items-center gap-[20px]'>
                    <div className='w-full flex items-center flex-col gap-[15px]'>
                        <div className='text-green-700 font-bold text-2xl'>
                            ABOUT
                        </div>
                        <div className='w-[50px] h-[5px] bg-green-700 rounded-full' />
                    </div>


                    <div className='px-2'>Welcome to Lombok, a sanctuary for plant lovers located in the heart of Chandigarh. Since 2019, we've been passionately curating a diverse collection of plants, each selected for its beauty, health, and ability to thrive in diverse environments. At our core, sustainability drives our practices—from eco-conscious packaging to water-wise gardening guidance. More than just a shop, we're a community hub, offering workshops, events, and expert advice to nurture your green journey. Join us in embracing nature's magic and enhancing your living spaces with our handpicked botanical treasures.</div>
                </div>

            </div>

          <div className='w-screen h-[300px]'></div>

         {/* footer section */}

         <Footer scrollToRef={aboutRef} productRef={productRef}/>

        </div>
    )
}

export default Home;
