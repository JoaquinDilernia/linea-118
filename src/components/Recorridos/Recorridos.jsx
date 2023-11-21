import React from 'react'
import './Recorridos.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import foto from '../../assets/foto.jpg'
import barriochino from '../../assets/barriochino.avif'
import recorridos from '../../assets/recorridos.jpg'




const Recorridos = () => {





  return (
    <div className="hero">

      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide className='SwiperSlide' > <img src={foto} alt="" /> </SwiperSlide>
      <SwiperSlide className='SwiperSlide' > <p>recorrido b </p> </SwiperSlide>  

      <SwiperSlide className='SwiperSlide' ><img src={foto} alt="" /></SwiperSlide>
      <SwiperSlide className='SwiperSlide' >  <p>recorrido c </p> </SwiperSlide>

      <SwiperSlide className='SwiperSlide' ><img src={foto} alt="" /></SwiperSlide>
      <SwiperSlide className='SwiperSlide' >  <p>recorrido d </p> </SwiperSlide>
    </Swiper>
  </div>


  )
}

export default Recorridos
