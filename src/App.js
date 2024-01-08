import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import {motion,useScroll,useSpring,useMotionValueEvent} from 'framer-motion'
import { useState } from 'react';

function App() {

  const {scrollYProgress}=useScroll();

  const scalex=useSpring(scrollYProgress);

  const {scrollY}=useScroll();
  const [hidden,sethidden]=useState(false);

  useMotionValueEvent(scrollY,"change",(latest)=>{
    const previous=scrollY.getPrevious();
     
    if(latest>previous ){
      sethidden(true);
    }
    else{
      sethidden(false);
    }
    
  });

  return (
    <div className="App">
   
   <motion.div 
      style={{
        scaleX:scalex,
        transformOrigin:'left',
        position:"fixed",
        top:0
        }} 
        
        className="w-full h-[7px] sticky z-20  bg-green-700">

      </motion.div>

    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
      
    </div>
  );
}

export default App;
