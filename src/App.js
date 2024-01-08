import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import {motion,useScroll,useSpring} from 'framer-motion'


function App() {

  const {scrollYProgress}=useScroll();

  const scalex=useSpring(scrollYProgress);

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
