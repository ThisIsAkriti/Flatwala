import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RentalProperty = () => {
    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      
    };
    return(
        <div className=" font-poppins  ">
           <div className='ml-16  mb-4'>
                <p className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red to-purple'>Properties For</p>
                <p className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red to-purple'>Rent</p>
                <p className=' text-black mt-2'>Properties on rent as per</p>
                <p className=' text-black'>your requirement</p>
            </div>


            <div className='  flex-row items-center px-8'>
                <Slider className="mb-6" {...settings}>
                  
                    <div className="p-2">   

                        <img className="h-60 m-auto" src="/images/img1.jpg" alt="flat image" />
                        
                        <div className=" flex justify-center -mt-24">
                                
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>

                        </div>

                    </div>     
                   
                    <div className='p-2 '>

                       <img className=' h-60 m-auto' src="/images/img2.jpg" alt="flat image" />

                       <div className=" flex justify-center -mt-24">         
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>
    
                        </div>
                     

                    </div>

                    <div className='p-2 '>

                       <img className='h-60 m-auto' src="/images/img3.jpg" alt="flat image" />
                      
                       <div className=" flex justify-center -mt-24">         
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>
    
                        </div>

                    </div>


                </Slider>

                <Slider className="mb-10" {...settings}>
                  
                    <div className="p-2">   

                        <img className="h-60 m-auto" src="/images/img1.jpg" alt="flat image" />
                        
                        <div className=" flex justify-center -mt-24">
                                
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>

                        </div>

                    </div>     
                   
                    <div className='p-2 '>

                       <img className=' h-60 m-auto' src="/images/img2.jpg" alt="flat image" />

                       <div className=" flex justify-center -mt-24">         
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>
    
                        </div>
                     

                    </div>

                    <div className='p-2 '>

                       <img className='h-60 m-auto' src="/images/img3.jpg" alt="flat image" />
                      
                       <div className=" flex justify-center -mt-24">         
                            <div className="flex justify-between items-center bg-white rounded-md py-4 px-2 w-80">
                                <div>
                                    <p className=" text-sm font-semibold">Luxury Family Home</p>
                                    <p className=" text-sm ">132 Green Park</p>
                                </div>
                                <div className=" font-semibold border-black border mr-4 py-2 px-4 rounded-md ">$5800</div>
                            </div>
    
                        </div>

                    </div>


                </Slider>
              
            </div>

            <div className="flex justify-center ">
                <button className="bg-button rounded-full px-4 py-2">Load More</button>
            </div>
        </div>
    )
}
export default RentalProperty;