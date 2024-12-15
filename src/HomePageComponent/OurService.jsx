

import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import Card Images
import card1 from "../HomePagePhoto/serviceMike.png";
import card2 from "../HomePagePhoto/serviceBulb.png";
import card3 from "../HomePagePhoto/serviceWeb.png";
import card4 from "../HomePagePhoto/serviceECommerce.png";
import card5 from "../HomePagePhoto/serviceGraphics.png";
import card6 from "../HomePagePhoto/serviceMultimedia.png";
import card7 from "../HomePagePhoto/serviceBuy.png";
import card8 from "../HomePagePhoto/serviceMarchendise.png";
import card9 from "../HomePagePhoto/serviceProxy.png";
import card10 from "../HomePagePhoto/serviceAcademy.png";
import card11 from "../HomePagePhoto/Frame (7).png";

const OurService = () => {
  const cards = [
    { img: card1, title: "Digital Marketing" },
    { img: card2, title: "Creative Writing Solution" },
    { img: card3, title: "Web & Software Development" },
    { img: card4, title: "E-Commerce Solution" },
    { img: card5, title: "Graphic Design" },
    { img: card6, title: "Multimedia & Video Editing" },
    { img: card7, title: "Buy & Sell" },
    { img: card8, title: "Merchandise" },
    { img: card9, title: "Proxy" },
    { img: card10, title: "Academy" },
    { img: card11, title: "Special Combo" },
  ];

  return (
    <div>
      <div className="space-y-4 pb-12">
        <h1 className="lg:text-6xl text-[28px] font-semibold text-white text-center">Our Service</h1>
        <p className="text-[#F3F3F4] lg:text-lg text-[14px] text-center">
          Enter your personal real estate sanctuary, where finding the ideal home is <br />
          effortless and comfortable with our assistance.
        </p>
      </div>

      {/* Swiper Slider for Small Devices */}
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg bg-gradient-to-r from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] p-6 text-left h-[400px]">
                <div className="flex justify-start mb-3 w-14 h-14">
                  <img src={card.img} alt="icon" className="w-14 h-14" />
                </div>
                <h2 className="text-white text-3xl font-semibold mb-3">{card.title}</h2>
                <p className="text-[#F3F3F4] text-lg">
                  We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where
                  finding the ideal home is effortless and comfortable with our assistance.
                </p>
                <button className="bg-clip-text bg-gradient-to-r from-[#6384FC] via-[#C16EFD] to-[#6384FC] text-lg font-medium mt-4 flex items-center gap-2 lg:justify-start justify-center mx-auto">
                  <p className="text-transparent">Read More</p> <MdOutlineArrowOutward />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid View for Large Devices */}
      <div className="hidden lg:grid md:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg bg-gradient-to-r from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] p-6"
          >
            <div className="flex justify-start mb-3">
              <img src={card.img} alt="icon" className="w-18 h-18" />
            </div>
            <h2 className="text-white text-3xl font-semibold mb-3">{card.title}</h2>
            <p className="text-[#F3F3F4] text-lg">
              We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where
              finding the ideal home is effortless and comfortable with our assistance.
            </p>
            <button className="bg-clip-text bg-gradient-to-r from-[#6384FC] via-[#C16EFD] to-[#6384FC] text-lg font-medium mt-4 flex items-center gap-2">
              <p className="text-transparent">Read More</p> <MdOutlineArrowOutward />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;

