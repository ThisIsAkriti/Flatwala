const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-footerTop to-footerBottom mt-14
    ">
       <div className="absolute flex text-white ml-[1100px] mt-10">
          <p className="font-bold mt-5 mr-4 ">Owned By:</p>
          <div className="flex">
            <div className="flex flex-col items-center">
              <img src="/images/saif.jpg" alt="PersonImg1" className="w-[58px] h-[58px] rounded-full border bg-gradient-to-b from-pinkGradient to-blueGradient p-px "/>
              <p className=" text-sm mt-3">Saif</p>
            </div>
            <div className="flex flex-col items-center -ml-3">
              <img src="/images/faizan.jpg" alt="PersonImg2" className="w-[58px] h-[58px] rounded-full border bg-gradient-to-b from-pinkGradient to-blueGradient p-px"/>
              <p className="mt-3 text-sm">Faizan</p>
            </div>
          </div>
        </div>
      <div className="h-screen flex flex-col items-center ">
        
        <div className="mt-12">
          <p className="text-3xl text-white">Subscribe to Our <span className="text-red font-bold">Newsletter</span> </p>
        </div>


       
        <div className="mt-8 mb-8">
          <input className=" mr-4 px-8 py-2 rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl" type="text" />
          <button className="text-sm font-bold text-white bg-subsButton px-6 py-2 rounded-xl  ">Subscribe</button>
        </div>

        <div className="flex w-11/12  justify-evenly ">
          
          <div>
            <p className=" font-bold mt-2">Address</p>
            <p className=" w-44 text-sm">Jamia Nagar,Okhla,Delhi India</p>
            <p className="text-xs mt-1" >Total Free Customer Care</p>
            <p className="text-xs font-bold mt-1">+91011122333344</p>
            <p className="text-xs mt-1">Live Support?</p>
            <p className="text-xs font-bold mt-1">support@flatwaala.in</p>
          </div>

          <div>
            <p className="font-bold">Popular Searches</p>
            <div className="flex">
              <div className=" text-xs mr-2">
                <p className="mt-2">Apartment for Sale</p>
                <p className="mt-2">Office for Sale</p>
                <p className="mt-2">House for Sale</p>
                <p className="mt-2">Villa for Sale</p>
                <p className="mt-2">Flats for Sale</p>
                <p className="mt-2">1BHK for Sale</p>
                <p className="mt-2">2BHK for Sale</p>
                <p className="mt-2">3BHK for Sale</p>
                <p className="mt-2">4BHK for Sale</p>
              </div>

              <div className="text-xs">
                <p className="mt-2">Apartment On Rent</p>
                <p className="mt-2">Office On Rent</p>
                <p className="mt-2">House On Rent</p>
                <p className="mt-2">Flats On Rent</p>
                <p className="mt-2">1BHK On Rent</p>
                <p className="mt-2">2BHK On Rent</p>
                <p className="mt-2">3BHK On Rent</p>
                <p className="mt-2">4BHK On Rent</p>
              </div>
            </div>

          </div>

          <div>
            <h2 className="font-bold">Quick Links</h2>
            <div className="text-xs">
              <p className="mt-2">Apartment for Sale</p>
              <p className="mt-2">Terms of Use</p>
              <p className="mt-2">Privacy Policy</p>
              <p className="mt-2">Pricing Plans</p>
              <p className="mt-2">Our Services</p>
              <p className="mt-2">Contact</p>
              <p className="mt-2">Careers</p>
              <p className="mt-2">FAQs</p>
            </div>
          </div>

          <div>

            <h1 className="font-bold text-white text-sm mb-4 mt-6" >Apps</h1>
            <div className="flex bg-white px-4 py-2 mb-4 items-center rounded-lg">
              <div>
                <img className="size-6 mr-4" src="/images/apple.png" alt="apple_icon" />
              </div>
              <div className="mr-1">
                <p className="text-xs text-gray-600">Download on the</p>
                <p className="font-bold text-xs">Apple Store</p>
              </div>
            </div>

            <div className="flex px-4 py-2 items-center rounded-lg">
              <div>
                <img className="size-6 mr-4" src="/images/playStoreIcon.png" alt="Play_Store"/>
              </div>
              <div>
                <p className="text-xs text-gray-200">Get in on</p>
                <p className="font-bold text-xs text-white">Google Play</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="">
        
        <div className="bg-black flex items-center justify-between px-28 py-2">
          <div className="flex items-center">
            <img src="/images/logo.jpeg" alt="logo" className="w-[39px] h-[30px]"/>
            <p className="text-xs text-white font-bold">Flatwaala.in </p>
          </div>
          <div className="flex w-fit j items-center ">
            <p className=" text-xs text-white font-bold">Follow Us</p>
            <img className="size-5 mx-4" src="/images/facebook.png" alt="facebook" />
            <img className="size-5 mx-4" src="/images/twitter.png" alt="facebook" />
            <img className="size-5 mx-4" src="/images/instagrm.png" alt="facebook" />
            <img className="size-5 mx-4" src="/images/LkdIn.png" alt="facebook" />
          </div>          
          
        </div>
        <div className="flex justify-between text-xs mx-28 mt-6 pb-8 pt-2 border-whiteGray border-t-2 ">
          <div> 
            <p className="font-bold ">@ flatwaala.in - All rights reserved</p>
          </div>
          <ul className="flex w-56 justify-evenly font-bold">
            <li>Privacy</li>
            
            <li className="flex items-center">
              <img src="/images/before.svg" alt="dot" className=" mr-4 size-1" />
              Terms
            </li>

            <li className="flex items-center">
              <img src="/images/before.svg" alt="dot" className=" mr-4 size-1" />Sitemap
            </li>
          </ul>

         
        </div>

      </div>
      
    </div>
  )
}

export default Footer
