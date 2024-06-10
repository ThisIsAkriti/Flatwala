
import { useEffect, useState } from "react";
import CarouselSmall from "./CarouselSmall";
import CarouselPc from "./CarouselPc";

const FeaturedCarousel = () => {
 

    const [isSmall , setIsSmall] = useState(window.innerWidth <= 640 );

      useEffect(() => {
        const handleResize = () => {
          setIsSmall(window.innerWidth <= 640 );
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
      <div className="font-semibold md:text-[24px] text-[24px]">Discover Our Featured Listings</div>
      :
      <div className=' h-[49px] mb-16'>
        <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple'>Discover Our Featured</p>
        <p className='flex font-bold text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple '>Listings</p>
      </div>}

      <p className=' text-gray-600 md:text-[24px] text-[24px] '>Our Top Notch Property</p>
    </div>


    <div className= { `  ${isSmall? 'mt-24 flex flex-wrap justify-center' : 'h-[281px] mt-44 ml-4 mr-4'}` }>
    {isSmall ? 
      <CarouselSmall/>      
      :
      <CarouselPc/>
    }
    </div>
    </>
  )
}


export default FeaturedCarousel
