import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const FeaturedCarousel = () => {
  var settings = {
      
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3
    
  };

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


  return (
  <>
    <div className='absolute md:ml-8 w-full flex flex-col items-center md:items-start'>
      {isSmall? 
      <div className="font-semibold md:text-[24px] text-[28px]">Discover Our Featured Listings</div>
      :
      <div className=' h-[49px] mb-16'>
        <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple'>Discover Our Featured</p>
        <p className='flex font-bold text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple '>Listings</p>
      </div>}

      <p className=' text-gray-600 md:text-[24px] text-[28px] '>Our Top Notch Property</p>
    </div>

    {isSmall ? 
    <div className=" mt-24 flex flex-wrap">
      <div className= 'w-[230px] px-2 mb-6'>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img1.jpg" alt="flat image" />
        
      </div>
      <div className=' w-[230px]  px-2 mb-6'>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img2.jpg" alt="flat image" />
        
      </div>
      <div className=' w-[230px]  px-2 mb-6 '>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img3.jpg" alt="flat image" />
        
      </div>
      <div className=' w-[230px]  px-2 mb-6 '>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img4.jpg" alt="flat image" />
        
      </div>
      <div className=' w-[230px]  px-2 mb-6 '>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img2.jpg" alt="flat image" />
        
      </div>
      <div className=' w-[230px]  px-2 mb-6 '>
          
        <button className='absolute bg-featuredButton mt-4 ml-2 px-2 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[179px] ' src="/images/img1.jpg" alt="flat image" />
        
      </div> 
    </div>
    
    : 

    <div className=" h-[281px] mt-44 ml-4 mr-4">
      <Slider {...settings} className="outline-none">

      <div className=' h-[277px] px-4 '>
          
        <button className='absolute bg-featuredButton mt-4 ml-4 px-4 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[240px] ' src="/images/img1.jpg" alt="flat image" />
        
        <button className='absolute bg-amt font-semibold -mt-12 ml-4 px-3 py-1 rounded-md'>$567K</button>
      
        <p className=' mt-2'>House on cliff</p>
      </div>

      <div className=' px-4 h-[277px]'>
          
        <button className='absolute bg-featuredButton mt-4 ml-4 px-4 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[240px]' src="/images/img1.jpg" alt="flat image" />
        
        <button className='absolute bg-amt font-semibold -mt-12 ml-4 px-3 py-1 rounded-md'>$567K</button>
      
        <p className=' mt-2'>House on cliff</p>
      </div>
      

      <div className='h-[277px] px-4'>

          <button className='absolute bg-featuredButton mt-4 ml-4 px-4 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[240px]' src="/images/img1.jpg" alt="flat image" />
        
          <button className='absolute bg-amt font-semibold -mt-12 ml-4 px-3 py-1 rounded-md'>$567K</button>

        <p className=' mt-2'>House on hollywood</p>

      </div>

      <div className='h-[277px] px-4'>
          
        <button className='absolute bg-featuredButton mt-4 ml-4 px-4 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[240px]' src="/images/img2.jpg" alt="flat image" />
      
        <button className='absolute bg-amt font-semibold -mt-12 ml-4 px-3 py-1 rounded-md'>$567K</button>

        <p className=' mt-2'>Independent house</p>

      </div>

      <div className='px-4 h-[277px]'>
          <button className='absolute bg-featuredButton mt-4 ml-4 px-4 py-1 rounded-md text-white text-sm font-bold'>FEATURED</button>

        <img className='h-[240px]'  src="/images/img1.jpg" alt="flat image" />
        
          <button className='absolute bg-amt font-semibold -mt-12 ml-4 px-3 py-1 rounded-md'>$567K</button>

        <p className=' mt-2'>Fully furnished Home Chattarpur</p>

      </div>
      </Slider>
    </div>}
    </>
  )
}


export default FeaturedCarousel
