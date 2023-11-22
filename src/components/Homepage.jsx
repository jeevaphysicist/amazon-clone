import React ,{ Fragment } from 'react';
import { Carousel , CarouselCategory, HomepageCard ,CarouselProduct } from "./"

function Homepage() {
  return (
    <Fragment>
         <div className='bg-amazonclone-backgroundcolor'>
            <div className='min-w-[1000px] max-w-[1500px]  m-auto'>
                <Carousel/>
                <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
                 <HomepageCard 
                  title="title of the iamge 1  "
                  img={`../images/home_grid_1.jpg`} 
                  link="somewhere ..."
                />
                <HomepageCard 
                  title="title of the iamge 2 "
                  img={`../images/home_grid_2.jpg`}
                  link="See More"
                />
                <HomepageCard 
                  title="title of the iamge 3 "
                  img={`../images/home_grid_3.jpg`}
                  link="View more"
                />
                <HomepageCard 
                  title="title of the iamge 4 "
                  img={`../images/home_grid_4.jpg`}
                  link="somewhere ..."
                />
                <HomepageCard 
                  title="title of the iamge 5 "
                  img={`../images/home_grid_5.jpg`}
                  link="see More ..."
                />
                <HomepageCard 
                  title="title of the iamge 6 "
                  img={`../images/home_grid_6.jpg`}
                  link="view ..."
                />
                <HomepageCard 
                  title="title of the iamge 7 "
                  img={`../images/home_grid_7.jpg`}
                  link="somewhere ..."
                />
                <HomepageCard 
                  title="title of the iamge 8 "
                  img={`../images/home_grid_8.jpg`}
                  link="view more"
                />
                <div className='m-3 pt-8'>
                    <img  
                    className="xl:hidden"
                    src="../images/banner_image_2.jpg" alt="image..." 
                    />
                </div>
                </div>
                <CarouselProduct />
                <CarouselCategory />
                <div className='h-[200px] '>
                  <img className='h-[100%] m-auto' src={`../images/banner_image.jpg`} alt="banner..." />
                </div>
               
            </div>
         </div>
    </Fragment>
  )
}

export default Homepage