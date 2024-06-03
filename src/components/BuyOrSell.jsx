import { useEffect, useState } from "react";
import arrow from "/images/arrow.svg";
import arrow2 from "/images/arrow2.svg"

const BuyOrSell = () => {


  const[isSmall , setIsSmall] = useState(window.innerWidth <= 640);
  useEffect(()=>{
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 640);
    };
    window.addEventListener('resize' , handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
  };
  } , []);

  return (
    <div className=" md:h-[420px] h-[200px] mt-4 ">
      <div className="absolute md:h-auto bg-red-600 h-[200px] ">
        <img className=" h-full" src="/images/bgImg2.jpg" alt="background_Image2" />
      </div>
      <div className=" flex justify-center">
        <div className="absolute flex flex-col items-center md:mt-[8%] mt-6  text-white" >
          <p className="md:text-sm text-xs md:mb-5 mb-4">BUY OR SELL</p>
          <p className="md:text-4xl text-[17px] md:font-bold md:mb-2">Looking to Buy a new property or sell an existing one?</p>
          <p className="md:text-4xl text-[17px] md:font-bold">Flatwwaala.in provides an awesome solution!</p>
          <div className="flex mt-6">
            <button className=" bg-featuredButton md:py-4 py-1 md:px-10 px-8 rounded-xl md:text-white text-black md:text-lg text-sm flex md:justify-normal items-center md:font-semibold">List Property 

            {isSmall?
             <img src={arrow} alt="arrow" className=" md:ml-3 ml-1 md:-mr-2 mt-1" /> 
             :
             <img src={arrow2} alt="arrow" className=" md:ml-5 ml-1 -mr-2 md:mt-2" />
            }

            </button>
            <button className=" md:bg-white bg-black md:text-black text-white border md:py-4 md:px-8 px-3 items-center rounded-xl md:text-lg text-sm flex md:font-semibold ml-10">Browse Properties
            {isSmall?
             
             <img src={arrow2} alt="arrow" className=" md:ml-5 ml-1 -mr-2 md:mt-2" />
             :
             <img src={arrow} alt="arrow" className=" md:ml-3 ml-1 md:-mr-2 mt-2" />
            }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyOrSell;
