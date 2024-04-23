import arrow from "/images/arrow.svg";
import arrow2 from "/images/arrow2.svg"

const BuyOrSell = () => {
  return (
    <div className=" h-[420px]">
        <div className="absolute">
          <img src="/images/bgImg2.jpg" alt="background_Image2" />
        </div>
        <div className=" flex justify-center">
            <div className="absolute flex flex-col items-center mt-[8%] text-white" >
                <p className="text-sm mb-5">BUY OR SELL</p>
                <p className="text-4xl font-bold mb-2">Looking to Buy a new property or sell an existing one?</p>
                <p className="text-4xl font-bold">Flatwwaala.in provides an awesome solution!</p>
                <div className="flex mt-6">
                <button className=" bg-featuredButton py-4 px-10 rounded-xl text-lg flex font-semibold">List Property 
                <img src={arrow2} alt="arrow" className=" ml-5 -mr-2 mt-2" />
                </button>
                <button className=" bg-white text-black py-4 px-8 rounded-xl text-lg flex font-semibold ml-10">Browse Properties
                <img src={arrow} alt="arrow" className=" ml-3 -mr-2 mt-2" />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyOrSell;
