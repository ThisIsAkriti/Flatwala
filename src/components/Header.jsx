import logo from '/images/logo.jpeg';
import Headroom from "react-headroom";

const Header = () => {
    return(
        <>
        <Headroom>
            <header className=" flex justify-between h-14 bg-black items-center font-poppins px-6">
                <div>
                   <img
                   className="size-14"
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
                <div>
                    <button className="bg-mycolor2 rounded-sm py-2 px-4 text-text-color">Add Property</button>
                    <button className=" bg-mycolor px-4 py-0 ml-10 shadow-mycolor shadow-md rounded-full font-semibold  text-white">Login</button>
                </div>
            </header>
        
        </Headroom>
        </>
    )
}
export default Header;