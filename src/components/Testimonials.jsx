import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
       
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3
  
};


  return (
    <div className="h-96 mt-14 flex flex-col">
      <div className="text-4xl mb-14 flex justify-center font-bold text-center">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-orange to-blue">Testimonials</p>
      </div>
      <div className=" px-20">
        <Slider {...settings}>
          <div className="">
            <div className=" bg-neutral-700 w-72 px-6 py-4">
            <div className="border-white border-b h-44"></div>
            <div className="flex items-center mt-2">
              <div className=" bg-slate-300 w-14 h-14 rounded-full"></div>
              <div className="ml-3">
                <p className="text-sm font-bold text-white">Brain Lara</p>
                <p className="text-xs text-rose-400">Business Owner</p>
              </div>
            </div>
            </div>
          </div>
          <div>
            <div className=" bg-neutral-700 w-72 px-6 py-4">
            <div className="border-white border-b h-44"></div>
            <div className="flex items-center mt-2">
              <div className=" bg-slate-300 w-14 h-14 rounded-full"></div>
              <div className="ml-3">
                <p className="text-sm font-bold text-white">Brain Lara</p>
                <p className="text-xs text-rose-400">Business Owner</p>
              </div>
            </div>
            </div>
          </div>
          <div>
            <div className=" bg-neutral-700 w-72 px-6 py-4">
            <div className="border-white border-b h-44"></div>
            <div className="flex items-center mt-2">
              <div className=" bg-slate-300 w-14 h-14 rounded-full"></div>
              <div className="ml-3">
                <p className="text-sm font-bold text-white">Brain Lara</p>
                <p className="text-xs text-rose-400">Business Owner</p>
              </div>
            </div>
            </div>
          </div>
          <div>
            <div className=" bg-neutral-700 w-72 px-6 py-4">
            <div className="border-white border-b h-44"></div>
            <div className="flex items-center mt-2">
              <div className=" bg-slate-300 w-14 h-14 rounded-full"></div>
              <div className="ml-3">
                <p className="text-sm font-bold text-white">Brain Lara</p>
                <p className="text-xs text-rose-400">Business Owner</p>
              </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials;
