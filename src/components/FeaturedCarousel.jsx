import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedCarousel = () => {
    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3
      
    };
  return (
  <>
    <div className='absolute ml-8'>
      <div className=' h-[49px] mb-16'>
          <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple'>Discover Our Featured</p>
          <p className='flex font-bold text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple '>Listings</p>
      </div>

      <p className=' text-gray-600 text-[24px]'>Our Top Notch Property</p>
    </div>

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
    </div>
    </>
  )
}


export default FeaturedCarousel
