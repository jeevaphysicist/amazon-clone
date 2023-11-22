import React ,{  Fragment } from 'react';
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation  } from "swiper/modules";
import { useNavigate , createSearchParams } from "react-router-dom"

import "swiper/css";
import "swiper/css/navigation"

function CarouselCategory() {

  const navigate = useNavigate();

  const SearchCategoryHandler = (category)=>{
    navigate({
      pathname:"search",
      search:`${
        createSearchParams({
          category:`${category}`,
          searchTerm:``
        })
      }`
    })
  }


  return (
    <Fragment>
          <div className=' bg-white m-3 '>
            <div className='text-2xl font-semibold p-3'> Shop By Category </div>
            <div>
               <Swiper
               navigation={true}
               slidesPerView={5}
               spaceBetween={10}
               modules={[Navigation]}
               >
                <SwiperSlide onClick={()=>SearchCategoryHandler('Deals')} className='cursor-pointer'>
                    <img src={'../images/category_0.jpg'} alt="img..." />
                </SwiperSlide> 
                <SwiperSlide  onClick={()=>SearchCategoryHandler('Amazon')} className='cursor-pointer'>
                    <img src={'../images/category_1.jpg'} alt="img..." />
                </SwiperSlide> 
                <SwiperSlide  onClick={()=>SearchCategoryHandler('Fashion')} className='cursor-pointer'>
                    <img src={'../images/category_2.jpg'} alt="img..." />
                </SwiperSlide> 
                <SwiperSlide  onClick={()=>SearchCategoryHandler('Computers')} className='cursor-pointer'>
                    <img src={'../images/category_3.jpg'} alt="img..." />
                </SwiperSlide> 
                <SwiperSlide  onClick={()=>SearchCategoryHandler('Home')} className='cursor-pointer'>
                    <img src={'../images/category_4.jpg'} alt="img..." />
                </SwiperSlide> 
                <SwiperSlide  onClick={()=>SearchCategoryHandler('Mobiles')} className='cursor-pointer'>
                    <img src={'../images/category_5.jpg'} alt="img..." />
                </SwiperSlide> 
               </Swiper>
            </div>
          </div>
    </Fragment>
  )
}

export default CarouselCategory