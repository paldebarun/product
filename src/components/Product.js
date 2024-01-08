import React from 'react'
import bgimage from '../images/pawel-czerwinski-lWBZ01XRRoI-unsplash.jpg'


const Product = ({image,description}) => {
  return (
    <div className='hover:scale-105 m-5 hover:cursor-pointer border transition-all duration-200   flex flex-col  w-full md:w-[300px] lg:w-[350px] justify-between shadow-lg  h-[450px] sm:h-[600px] items-center'>
    
    <img src={image} className=' w-[200px] sm:w-full h-auto  ' />
    
    <div className='w-full h-auto flex justify-center items-center'>
        <div className='w-3/12 h-[5px] bg-green-700 rounded-full'>

        </div>
    </div>

    <div className='w-full  text-center py-5 px-5 text-slate-500'>

        {description.length > 100 ? `${description.substring(0, 100)}...`:description}
    </div>
    
    </div>
  )
}

export default Product;
