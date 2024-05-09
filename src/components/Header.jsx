import logo from '/images/logo.jpeg';
import Headroom from "react-headroom";

const Header = () => {
    //font-outfit in header only
    return(
        <>
        <Headroom>
            <header className=" flex justify-between h-16 w-screen bg-black items-center font-poppins px-6">
                <div>
                   <img
                   className="size-14 max-w-14 max-h-14 mt-1 object-contain"
                    src={logo} alt="logo" />
                </div>
                <div className=' hidden md:flex  '>
                    <ul className="flex space-x-4 text-white ml-16 font-semibold ">
                        <li className='hover:text-mycolor cursor-pointer'>HOME</li>
                        <li className='hover:text-mycolor cursor-pointer'>SELL</li>  
                        <li className='hover:text-mycolor cursor-pointer'>RENT</li>
                        <li className='hover:text-mycolor cursor-pointer truncate'>CONTACT US</li>
                        <li className='hover:text-mycolor cursor-pointer truncate'>ABOUT US</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <button className="bg-mycolor2 rounded-sm py-2 px-4 text-text-color md:flex truncate hidden">Add Property
                    <img src="/images/arrow3.svg" alt="arrow" className='ml-2 mt-1' />
                    </button>
                    <button className=" bg-mycolor px-6 mr-6 md:mr-0 ml-10 shadow-mycolor shadow-md rounded-full h-8 font-semibold  text-white">Login</button>
                    <div className='md:m-0 mr-4'>
                        <img className='md:hidden' src="./images/hamburgerMenu.png" alt="menu" />
                    </div>
                </div>
            </header>
        
        </Headroom>
        </>
    )
}
export default Header;