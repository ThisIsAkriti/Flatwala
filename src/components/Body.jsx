import bgImg from '/images/bgImg.jpeg';
import search_Icon from '/images/search_Icon.png'
import HelpYou from './HelpYou';
import RentalProperty from './RentProperty';
import BuyOrSell from './BuyOrSell';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from  './Testimonials.jsx';
import Footer from './Footer.jsx'
import FeaturedCarousel from './FeaturedCarousel.jsx';
import { useEffect, useState } from 'react';
const Body = () => {

    const [isSmall , setIsSmall] = useState(window.innerWidth <= 640);

      useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className=' font-poppins'>
            
            <div className='h-[660px]'>
                <div className='absolute'>
                  <img className='md:mt-10 xl:mt-10 mt-2 w-screen md:h-[571px] xl:h-[571px]  object-cover' src={bgImg} alt="background image" />
                </div>
                <div className='flex justify-center'>
                    <div className=' w-10/12 items-center h-40 md:bg-black  lg:bg-black xl:bg-black xl:bg-opacity-50 lg:bg-opacity-50 md:bg-opacity-50 absolute flex flex-col 2xl:mt-[24%] xl:mt-[24%] lg:mt-[30%]  md:mt-[30%] mt-[12%] rounded-xl '>
                        <div className=' 
                         bg-white rounded-full flex justify-center items-center md:py-3 xl:py-3 lg:py-3 py-2 px-8 md:px-10 xl:px-10 lg:px-10 xl:w-[409px] lg:w-[400px] md:w-[400px] -mt-6 xl:mb-12 lg:mb-12 md:mb-12 mb-8'>
                            <p className='text-xs w-28  flex items-center text-slateGray'>
                                <img className=' mr-2 size-6' src="/images/location.png" alt="location" />
                                Batla house, Delhi
                            </p>
                            <img src="/images/dropDownArrow.png" className='size-4 ml-10' alt="drop down arrow" />
                           
                        </div>
                        <div className='md:w-7/12 w-full flex md:shadow-none   shadow-white shadow-md rounded-xl'>
                            
                            <div className='md:hidden flex items-center bg-white w-12 pl-6 rounded-tl-xl rounded-bl-xl opacity-85'>
                            
                              <img className='size-5 ' src="/images/black_search.png"  alt="search" />
                        
                            </div>

                            <input
                            className='py-3 px-2 md:px-4 w-11/12 md:rounded-md mr-2 md:bg-gray-300 text-black outline-none placeholder:text-gray-700 md:opacity-full opacity-85'
                            type="text"
                            placeholder = {isSmall ?  'Search House, Appartment, etc':'Enter keyword like apartment...' } 
                            />

                            <div className=' md:hidden bg-white -ml-2 flex items-center justify-center w-20 border-l-gray-200 border-l rounded-tr-xl rounded-br-xl opacity-85'>
                                <img className='size-6' src="/images/micIcon.png" alt="mic-icon" />
                            </div>
    
                            <button 
                                className='bg-gradient-to-b  from-SearchOrange to-SearchYello p-3 rounded-md shadow-gray-700 shadow-md md:flex hidden'>
                                <img className='size-6 ' src={search_Icon} alt="search" />   
                            </button>
                        </div>
                    </div>
               
                </div>
            </div>

            <FeaturedCarousel/>
            <HelpYou/>
            <RentalProperty/>
            <BuyOrSell/>
            <WhyChooseUs/>
            <Testimonials/>
            <Footer/>

        </div>
    )
}


export default Body;