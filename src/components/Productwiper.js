import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import productdata from '../constants/Productdata';
import Product from './Product';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Productwiper = () => {

    const [slidesPerView, setSlidesPerView] = useState(3); // Default value

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set initial value based on current width
    handleResize();

    // Cleanup: remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    slidesPerView={slidesPerView}
    // pagination={{
    //   clickable: true,
    // }}
    // navigation={true}
    modules={[Autoplay]}
    className="mySwiper"
  >

    {productdata.map((product, index) => (
        <SwiperSlide  key={product} virtualIndex={index}>
          <Product image={product.image} description={product.description} />
        </SwiperSlide>
        
      ))}

      

  </Swiper></div>
  )
}

export default Productwiper;
