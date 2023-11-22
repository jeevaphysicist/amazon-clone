import React ,{  Fragment } from 'react';
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation , Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"

function Carousel() {
  return (
    <Fragment>
          <div className=' h-[600px] bg-white'>
              <Swiper
              loop={true}
              spaceBetween={0}
              className=' h-[50%] '
              navigation={true}
              modules={[Autoplay , Navigation]}
              autoplay={{ delay : 4500}}
              >
                 <SwiperSlide>
                          <img src={`../images/carousel_1.jpg`} alt="carousel_1..." />
                 </SwiperSlide>
                 <SwiperSlide>
                          <img src={`../images/carousel_2.jpg`} alt="carousel_2..." />
                 </SwiperSlide>
                 <SwiperSlide>
                         <video 
                         controls 
                         muted="muted"
                         >
                           <source src={`../images/carousel_vid.mp4`} />
                         </video>
                 </SwiperSlide>
                 <SwiperSlide>
                          <img src={`../images/carousel_4.jpg`} alt="carousel_4..." />
                 </SwiperSlide>
                 <SwiperSlide>
                          <img src={`../images/carousel_5.jpg`} alt="carousel_5..." />
                 </SwiperSlide>
              </Swiper>
              <div className=' h-[50%] bg-gradient-to-b from-stone-900 ' />
          </div>
    </Fragment>

  )
}

export default Carousel