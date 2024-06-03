import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../utils/data.jsx';
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
const RentalProperty = () => {

    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 3
         
      };
  
    
    const [noOfCards , setNoOfCards] = useState(3);


    const loadMore = () => {
        setNoOfCards(noOfCards + noOfCards);
    }

    const slice = data.cardData.slice(0,noOfCards);

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
    <>
     
        <div className=" font-poppins">
           
           <div className='md:ml-16 ml-8 md:mb-4 mb-6'>
                <div className='font-bold text-5xl flex'>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple">
                    Properties For</p>
                </div>
                <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple'>Rent</p>
                <p className=' text-gray-600 mt-2 text-xl'>
                    Properties on rent as per
                </p>
                <p className=' text-gray-600 text-xl'>your requirement</p>
           </div>

           {isSmall?
            <div className=" mx-4 h-[220px] ">
                <Slider {...settings} className="outline-none">
            
                <div className=' h-[277px] px-4 '>
            
                    <img className='h-[200px] ' src="/images/img1.jpg" alt="flat image" />
                    
                    <div className=" flex justify-center -mt-14 px-2">
                                        
                        <div className="flex justify-between items-center bg-white rounded-xl px-2 py-1 w-80">
                            <div>
                                <p className=" text-sm font-semibold">Luxury Family Home</p>
                                <p className=" text-sm text-gray-500 ">132 Green Park</p>
                            </div>
                            <div className=" font-semibold border-black border px-2 rounded-md ">$5800</div>
                        </div>
            
                    </div>
                </div>
                <div className=' h-[277px] px-4 '>
            
                    <img className='h-[200px] ' src="/images/img2.jpg" alt="flat image" />
                    
                    <div className=" flex justify-center -mt-14 px-2">
                                        
                        <div className="flex justify-between items-center bg-white rounded-xl px-2 py-1 w-80">
                            <div>
                                <p className=" text-sm font-semibold">Luxury Family Home</p>
                                <p className=" text-sm text-gray-500 ">132 Green Park</p>
                            </div>
                            <div className=" font-semibold border-black border px-2 rounded-md ">$5800</div>
                        </div>
            
                    </div>
                </div>
                <div className=' h-[277px] px-4 '>
            
                    <img className='h-[200px] ' src="/images/img3.jpg" alt="flat image" />
                    
                    <div className=" flex justify-center -mt-14 px-2">
                                        
                        <div className="flex justify-between items-center bg-white rounded-xl px-2 py-1 w-80">
                            <div>
                                <p className=" text-sm font-semibold">Luxury Family Home</p>
                                <p className=" text-sm text-gray-500 ">132 Green Park</p>
                            </div>
                            <div className=" font-semibold border-black border px-2 rounded-md ">$5800</div>
                        </div>
            
                    </div>
                </div>
                <div className=' h-[277px] px-4 '>
            
                    <img className='h-[200px] ' src="/images/img2.jpg" alt="flat image" />
                    
                    <div className=" flex justify-center -mt-14 px-2">
                                        
                        <div className="flex justify-between items-center bg-white rounded-xl px-2 py-1 w-80">
                            <div>
                                <p className=" text-sm font-semibold">Luxury Family Home</p>
                                <p className=" text-sm text-gray-500 ">132 Green Park</p>
                            </div>
                            <div className=" font-semibold border-black border px-2 rounded-md ">$5800</div>
                        </div>
            
                    </div>
                </div>
            
                
                </Slider>
            </div>

            :

            <div className=" flex flex-wrap px-4">
                 {slice.map((item , index) => {
                    return(
                        <>
                        <div className=' px-8 mb-6 ' key={index}>
                            
                        
                            <div className="p-2 ">   

                                <img className="h-60 m-auto" src={item.img} alt="flat image" />
                            
                                <div className=" flex justify-center -mt-24 px-2">
                                    
                                    <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                        <div>
                                            <p className=" text-sm font-semibold">{item.heading}</p>
                                            <p className=" text-sm ">{item.title}</p>
                                        </div>
                                        <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">{item.amt}</div>
                                    </div>
        
                                </div>

                            </div> 
                        
                            
                        
                        </div>
                        </>
                    )
                })}
            </div>
            }
      

            {isSmall? null : <div className="flex justify-center ">
                <button className="bg-button rounded-full px-4 py-2 text-white text-sm shadow-gray-700 shadow-sm"
                onClick={() => loadMore()}
                >Load More</button>
            </div>}
        </div>
     
    </>
    )
}
export default RentalProperty;