// import React from 'react';
import bannerImg from '../../assets/banner.jpg';
import playStoreImg from '../../assets/play_store.png';
import appStoreImg from '../../assets/app_store.png';

const bannerStyle = {
       backgroundImage: `url(${bannerImg})`,
       backgroundPosition: "center",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       width: "100%",
       height: "100%",
}

const AppBanner = () => {
       return (
              <>
                     <div className='container my-14'>
                            <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:max-w-full sm:items-center rounded-xl'>
                                   <div>
                                          <div className='space-y-6 max-w-xl mx-auto'>
                                                 <h1 data-aos="fade-up" className='text-2xl text-center sm:text-3xl font-semibold'>Download the app</h1>
                                                 <p data-aos="fade-up" data-aos-delay="300" className='text-center sm:px-20'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste vitae sint neque. Consectetur animi eligendi nam dolores.
                                                 </p>
                                                 {/* images link */}
                                                 <div data-aos="fade-up" data-aos-delay="500" className='flex justify-center items-center gap-4'>
                                                        <a href="#">
                                                               <img src={playStoreImg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                                        </a>
                                                        <a href="#">
                                                               <img src={appStoreImg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                                        </a>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default AppBanner