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
            
            <div className='h-[766px]'>
                <div className='absolute'>
                  <img className='mt-10 w-screen ' src={bgImg} alt="background image" />
                </div>
                <div className='flex justify-center'>
                    <div className=' w-10/12 items-center h-40 bg-black bg-opacity-50 absolute flex flex-col mt-[24%] rounded-xl'>
                        <div className='  bg-white rounded-full flex justify-center py-3 px-10 w-4/12 -mt-6 mb-12'>
                            Batla house Delhi,
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

                
                <div className='absolute mt-[48%] ml-8'>
                    <div className=' h-[49px] mb-16'>
                        <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red to-purple'>Discover Our Featured</p>
                        <p className='flex font-bold text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-r from-red to-purple bg-green-400'>Listings</p>
                    </div>
                   
                    <p className=' text-gray-600 text-[24px]'>Our Top Notch Property</p>
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