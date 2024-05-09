import bgImg from '/images/bgImg.jpeg';
import search_Icon from '/images/search_Icon.png'
import HelpYou from './HelpYou';
import RentalProperty from './RentProperty';
import BuyOrSell from './BuyOrSell';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from  './Testimonials.jsx';
import Footer from './Footer.jsx'
import FeaturedCarousel from './FeaturedCarousel.jsx';
const Body = () => {

    

    return(
        <div className=' font-poppins'>
            
            <div className='h-[660px]'>
                <div className='absolute'>
                  <img className='mt-10 w-screen h-[571px] object-cover' src={bgImg} alt="background image" />
                </div>
                <div className='flex justify-center'>
                    <div className=' w-10/12 items-center h-40 bg-black bg-opacity-50 absolute flex flex-col 2xl:mt-[24%] xl:mt-[24%] lg:mt-[30%]  md:mt-[30%] sm:mt-[40%] mt-[52%] rounded-xl '>
                        <div className='  bg-white rounded-full flex justify-center items-center py-3 px-10 xl:w-[409px] lg:w-[400px] md:w-[400px] sm:w-[400px] w-[300px] -mt-6 mb-12'>
                            <p className='text-xs w-24 flex items-center text-slateGray'>
                                <img className=' mr-2 size-4' src="/images/location.png" alt="location" />
                                Batla house, Delhi
                            </p>
                            <img src="/images/dropDownArrow.png" className='size-4 ml-10' alt="drop down arrow" />
                           
                        </div>
                        <div className='w-7/12 flex'>
                            <input
                            className='py-3 px-4 w-11/12 rounded-md mr-2 bg-gray-300 text-black outline-none placeholder:text-gray-700'
                            type="text" placeholder='Enter keyword like apartment...' />
                            <button className='bg-gradient-to-b  from-SearchOrange to-SearchYello  p-3 rounded-md shadow-gray-700 shadow-md'>
                               
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