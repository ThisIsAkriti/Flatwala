const Header = () => {
    return(
        <>
            <div className="flex justify-between h-14 bg-black items-center  px-6">
                <div>
                   <img
                   className=" size-10" 
                    src="https://thumbs.dreamstime.com/b/apartment-flat-house-building-real-estate-outdoor-apartment-flat-house-building-real-estate-concept-outdoor-residential-home-134575349.jpg" alt="logo" />
                </div>
                <div>
                    <ul className="flex font-semibold space-x-4 text-white ml-16">
                        <li>Home</li>
                        <li>Sell</li>  
                        <li>Rent</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <button className="bg-mycolor2 rounded-sm py-2 px-4 text-text-color">Add Property</button>
                    <button className=" bg-mycolor px-4 pb-1 py-0 ml-10 shadow-mycolor shadow-sm rounded-full font-semibold text-white">Login</button>
                </div>
            </div>
        </>
    )
}
export default Header;