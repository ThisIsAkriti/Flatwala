import icon1 from "/images/icon1.svg";
import icon2 from "/images/icon2.svg";
import icon3 from "/images/icon3.svg";
import arrow from "/images/arrow.svg";
import arrow2 from "/images/arrow2.svg";
const HelpYou = () => {
    return(
        <div className="font-poppins mt-5">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl mt-2 font-semibold">See How Flatwala.In Can Help You</h1>
            </div>

            <div className="flex justify-center">
                <div className=" p-4 flex  mt-8"> 
                    <div className="rounded-xl w-96 flex flex-col justify-center items-center px-6 py-4">
                        <div className="mt-6">
                            <img className="size-36" src={icon1} alt="House_Image1"/>
                        </div>
                        <div className="font-semibold text-2xl mt-6 mb-4">Buy a property</div>
                        <div className="text-center mb-4">
                           Buy a property of your choice, Your dream house is waiting for you.
                        </div>
                    
                        <button className="border-black border-2 py-4 px-8 rounded-2xl text-lg mb-3 flex">Find a Home 
                        <img src={arrow} alt="arrow" className=" ml-2 mt-2" />
                        </button>
                        
                       
                    </div>
                </div>
                <div className=" p-4 flex  mt-8"> 
                    <div className="rounded-xl shadow-gray-300 shadow-md w-80 flex flex-col justify-center items-center px-6 py-4">
                        <div className="mt-6">
                            <img className="size-36" src={icon2} alt="House_Image1"/>
                        </div>
                        <div className="font-semibold text-2xl mt-6 mb-4">Sell a property</div>
                        <div className="text-center mb-4">
                            Want a good price for your property give us a try
                        </div>
                        <div>
                            <button className="bg-black text-white py-4 px-8 rounded-2xl text-lg flex  mb-3">Place an ad 
                            <img src={arrow2} alt="arrow" className=" ml-2 mt-2" />
                            </button>
                       
                        </div>
                        
                    </div>
                </div>
                <div className=" p-4 flex mt-8"> 
                    <div className="rounded-xl w-96 flex flex-col justify-center items-center px-6 py-4">
                        <div className="mt-6">
                            <img className="size-36" src={icon3} alt="House_Image1"/>
                        </div>
                        <div className="font-semibold text-2xl mt-6 mb-4">Rent a property</div>
                        <div className="text-center mb-4">
                            "Rent Your Haven: Where Comfort Meets Convenience!" 
                        </div>
                        <button className="border-black border-2   py-4 px-8 rounded-2xl text-lg mb-3 flex">Find a Rental 
                        <img src={arrow} alt="arrow" className=" ml-2 mt-2" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HelpYou;