import { useEffect, useState } from "react"

const WhyChooseUs = () => {
    const [isSmall , setIsSmall] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 640);
          };
          window.addEventListener('resize' , handleResize);
          
          return () => {
            window.removeEventListener('resize', handleResize);
        };
    } , [])
  return (
    <div className="mt-20 md:h-[660px] p-6">

        {isSmall? 
        <div>
            <div className="mb-4">
                <p className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-blue">Why </p>
                <p className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-blue">Choose Us</p>
            </div> 

            <div className=" space-y-6">
                <div className=" flex flex-col items-center justify-center ">
                    <div className="bg-black text-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                        <p className="text-3xl font-extrabold">1</p>
                    </div>
                    <div className=" w-[320px] flex flex-col items-center ">
                        <p className=" text-sm font-bold my-2">Brokerage Free Move in</p>
                       
                        <p className=" text-sm flex text-center justify-center">No brokerage included while moving in, you just have to pay the rent only.</p>
                       
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center ">
                    <div className="bg-black text-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                        <p className="text-3xl font-extrabold">2</p>
                    </div>
                    <div className=" w-[320px] flex flex-col items-center ">
                        <p className=" text-sm font-bold my-2">No Extra Deposite</p>
                        <p className=" text-sm flex text-center  justify-center">Now, you dont need to pay any extra money as a deposite.</p>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center ">
                    <div className="bg-black text-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                        <p className="text-3xl font-extrabold">3</p>
                    </div>
                    <div className=" w-[315px] flex flex-col items-center ">
                        <p className=" text-sm font-bold my-2">The EMI option</p>
                        <p className=" text-sm flex text-center  justify-center">Now, You can pay the rent in the form of paylater or on the easy istallments.</p>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center ">
                    <div className="bg-black text-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                        <p className="text-3xl font-extrabold">4</p>
                    </div>
                    <div className=" w-[320px] flex flex-col items-center ">
                        <p className=" text-sm font-bold my-2">You get insurance</p>
                        <p className=" text-sm flex text-center  justify-center">This benefit is for landlord or land-owners only.</p>
                    </div>
                </div>
                
            </div>
        </div>
        :
        <div className="flex h-full">
            <div className="absolute ml-14 ">
            <img className=" h-[612px] rounded-xl" src="/images/chooseUsImg.jpg" alt="Image" />
            </div>
            <div className="absolute bg-gradient-to-b from-fromGrey to-toGrey p-14 pr-20 rounded-xl ml-[50%]">
                <div className="mb-2">
                <p className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-blue">Why Choose</p>
                <p className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-blue">Us</p>
                </div>
                <div className=" w-[360px] mb-6">
                    <p className="text-sm">As the complexity of buildings to increase, the field of architecture.</p>
                </div>
                <div className=" space-y-6">
                    <div className="flex items-center ">
                        <div className="bg-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                            <p className="text-3xl font-extrabold">1</p>
                        </div>
                        <div className=" w-[310px]">
                            <p className=" text-sm font-bold mb-3">Brokerage Free Move in</p>
                            <p className=" text-sm">No brokerage included while moving in, you just have to pay the rent only.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                            <p className=" text-3xl font-extrabold">2</p>
                        </div>
                        <div className=" w-[310px] ">
                            <p className=" text-sm font-bold mb-3">No Extra Deposite</p>
                            <p className=" text-sm">Now, you dont need to pay any extra money as a deposite.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                            <p className=" text-3xl font-extrabold">3</p>
                        </div>
                        <div className=" w-[310px] ">
                            <p className=" text-sm font-bold mb-3">The EMI option</p>
                            <p className=" text-sm">Now, You can pay the rent in the form of paylater or on the easy istallments.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <div className="bg-white px-6 py-4 rounded-full flex items-center justify-center mr-4">
                            <p className=" text-3xl font-extrabold">4</p>
                        </div>
                        <div className=" w-[310px]">
                            <p className=" text-sm font-bold mb-3">You get insurance</p>
                            <p className=" text-sm">This benefit is for landlord or land-owners only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
      
    </div>
  )
}

export default WhyChooseUs
