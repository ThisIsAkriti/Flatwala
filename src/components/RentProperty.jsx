import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../utils/data.jsx';
import { useState } from "react";
const RentalProperty = () => {
    
    
    const [noOfCards , setNoOfCards] = useState(3);

    const loadMore = () => {
        setNoOfCards(noOfCards + noOfCards);
    }

    const slice = data.cardData.slice(0,noOfCards);

    return(
        <div className=" font-poppins mb-14 ">
           <div className='ml-16 mb-4'>
                <div className='font-bold text-5xl flex'>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple">
                    Properties For</p>
                </div>
                <p className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange to-purple'>Rent</p>
                <p className=' text-black mt-2 text-xl'>Properties on rent as per</p>
                <p className=' text-black text-xl'>your requirement</p>
           </div>

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
           
      

            <div className="flex justify-center ">
                <button className="bg-button rounded-full px-4 py-2 text-white text-sm shadow-gray-700 shadow-sm"
                onClick={() => loadMore()}
                >Load More</button>
            </div>
        </div>
    )
}
export default RentalProperty;