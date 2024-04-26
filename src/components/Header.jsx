import logo from '/images/logo.jpeg';
import Headroom from "react-headroom";

const Header = () => {
    //font-outfit in header only
    return(
        <>
        <Headroom>
            <header className=" flex justify-between h-16 bg-black items-center font-poppins px-6">
                <div>
                   <img
                   className="size-14 mt-1"
                    src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="flex space-x-4 text-white ml-16 font-semibold">
                        <li className='hover:text-mycolor cursor-pointer'>HOME</li>
                        <li className='hover:text-mycolor cursor-pointer'>SELL</li>  
                        <li className='hover:text-mycolor cursor-pointer'>RENT</li>
                        <li className='hover:text-mycolor cursor-pointer'>CONTACT US</li>
                        <li className='hover:text-mycolor cursor-pointer'>ABOUT US</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <button className="bg-mycolor2 rounded-sm py-2 px-4 text-text-color flex">Add Property
                    <img src="/images/arrow3.svg" alt="arrow" className='ml-2 mt-1' />
                    </button>
                    <button className=" bg-mycolor px-6 ml-10 shadow-mycolor shadow-md rounded-full h-8 font-semibold  text-white">Login</button>
                </div>
            </header>
        
        </Headroom>
        </>
    )
}
export default Header;