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
    <div className=" h-[281px] mt-12 ml-4 mr-4">
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
  )
}


export default FeaturedCarousel
