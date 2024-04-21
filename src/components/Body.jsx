import bgImg from '/images/bgImg.jpeg';
import search_Icon from '/images/search_Icon.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Body = () => {

    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      
      };

    return(
        <div className=' font-poppins'>
            
            <div>
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
                            <button className='bg-gradient-to-b from-orange-700 to-yellow-500 p-3 rounded-md'>
                                <img className='size-8' src={search_Icon} alt="search" />
                            </button>
                        </div>
                     </div>
                </div>
                
            </div>

            <div className='absolute mt-[48%] ml-8'>
                <p className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red to-purple'>Discover Our Featured</p>
                <p className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red to-purple'>Listings</p>
                <p className=' text-gray-600 mt-2 mb-8'>Our Top Notch Property</p>
            </div>


            <div className='mt-[58%] flex-row items-center px-6'>
                <Slider {...settings}>
                    <div className='p-2 '>
                      <img className=' w-60' src="/images/img1.jpg" alt="flat image" />
                      <p className=' mt-2'>flat name title</p>
                    </div>
                    <div className='p-2 '>
                       <img className=' w-60' src="/images/img2.jpg" alt="flat image" />
                       <p>flat name title</p>

                    </div>
                    <div className='p-2 '>
                       <img className=' w-60' src="/images/img3.jpg" alt="flat image" />
                       <p>flat name title</p>

                    </div>
                    <div className='p-2 '>
                      <img className=' w-60' src="/images/img1.jpg" alt="flat image" />
                      <p>flat name title</p>

                    </div>
                    <div className='p-2 '>
                      <img className=' w-60' src="/images/img2.jpg" alt="flat image" />
                      <p>flat name title</p>

                    </div>
                    <div className='p-2 '>
                       <img className=' w-60'  src="/images/img1.jpg" alt="flat image" />
                       <p>flat name title</p>

                    </div>
                </Slider>
            </div>


        </div>
    )
}


export default Body;