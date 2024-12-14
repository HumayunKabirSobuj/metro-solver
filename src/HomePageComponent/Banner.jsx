import star from "../HomePagePhoto/star.png";
import banner2 from "../HomePagePhoto/banner2.jpg";
import brembo from "../HomePagePhoto/brembo.png";
import luminus from "../HomePagePhoto/luminus.png";
import motorola from "../HomePagePhoto/motorola.png";
import banner3 from "../HomePagePhoto/banner3.png";

const Banner = () => {
  return (
    <div>
      <div className="mb-14">
        <div className=" items-center px-10 mb-8 grid grid-cols-3">
          <h1 className="text-white font-semibold text-8xl col-span-1">
            Creative
          </h1>
          <p className="text-[#E7E8EA] text-xl font-medium col-span-2">
            We specialise in delivering ready-to-use websites, mobile
            applications, and comprehensive online business services. We are the
            agency that pushes boundaries to find the most original, most
            thoughtful solutions.
          </p>
        </div>
        <div className="px-10 items-center grid grid-cols-3  ">
          <div className="col-span-1">
            <button className=" text-2xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-2 px-7 flex items-center">
              <img src={star} alt="" />
              Book A Free Consulting
            </button>
          </div>
          <div className="col-span-2 w-full">
            <h1 className="text-white  font-normal text-[90px] ">
              DIGITAL AGENCY
            </h1>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center mb-20">
        {/* Left Section */}
        <div className="w-1/2 h-[450px] p-8 bg-white text-gray-900 rounded-l-2xl">
          <h2 className="text-[90px] font-semibold text-[#10192A]">
            30M <span className="text-yellow-500">+</span>
          </h2>
          <h3 className="mt-6 text-4xl font-bold text-[#10192A] mb-4">
            Active users on product we created
          </h3>
          <p className="text-[18px] text-[#70757F] font-medium leading-relaxed">
            Our strength lies in challenging fundamental assumptions, unveiling
            entrenched behaviors, simplifying intricate processes, and crafting
            impactful products and services that enhance the lives of millions.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 h-[450px] overflow-hidden">
          <img
            src={banner2}
            alt="banner"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Right Section */}

        <div className="w-1/2 h-[450px] overflow-hidden">
          <img
            src={banner3}
            alt="banner"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      {/* End */}

      <div className="flex items-center gap-2 justify-between">
        <button
          className="text-white text-lg font-medium px-6 py-3 rounded-[12px] 
        bg-[linear-gradient(92deg,#1B1B31_0.24%,#2B1E36_56.45%,#1B1B31_99.83%)] 
        hover:opacity-90 focus:outline-none"
        >
          <img src={luminus} alt="" />
        </button>
        <button
          className="text-white text-lg font-medium px-6 py-3 rounded-[12px] 
        bg-[linear-gradient(92deg,#1B1B31_0.24%,#2B1E36_56.45%,#1B1B31_99.83%)] 
        hover:opacity-90 focus:outline-none"
        >
          <img src={brembo} alt="" />
        </button>
        <button
          className="text-white text-lg font-medium px-6 py-3 rounded-[12px] 
        bg-[linear-gradient(92deg,#1B1B31_0.24%,#2B1E36_56.45%,#1B1B31_99.83%)] 
        hover:opacity-90 focus:outline-none"
        >
          <img src={motorola} alt="" />
        </button>
        <button
          className="text-white text-lg font-medium px-6 py-3 rounded-[12px] 
        bg-[linear-gradient(92deg,#1B1B31_0.24%,#2B1E36_56.45%,#1B1B31_99.83%)] 
        hover:opacity-90 focus:outline-none"
        >
          <img src={luminus} alt="" />
        </button>
        <button
          className="text-white text-lg font-medium px-6 py-3 rounded-[12px] 
        bg-[linear-gradient(92deg,#1B1B31_0.24%,#2B1E36_56.45%,#1B1B31_99.83%)] 
        hover:opacity-90 focus:outline-none"
        >
          <img src={brembo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Banner;

// import star from "../HomePagePhoto/star.png";
// import banner2 from "../HomePagePhoto/banner2.jpg";

// const Banner = () => {
//   return (
//     <div className="w-full">
//       {/* Top Section */}
//       <div className="px-10 mb-8 grid grid-cols-3 items-center">
//         <h1 className="text-white font-semibold text-8xl col-span-1">
//           Creative
//         </h1>
//         <p className="text-[#E7E8EA] text-xl font-medium col-span-2">
//           We specialise in delivering ready-to-use websites, mobile applications, and comprehensive
//           online business services. We are the agency that pushes boundaries to find the most
//           original, most thoughtful solutions.
//         </p>
//       </div>

//       {/* Middle Section */}
//       <div className="px-10 grid grid-cols-3 items-center">
//         <div className="col-span-1">
//           <button className="text-2xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-2 px-7 flex items-center">
//             <img src={star} alt="star" className="w-8 h-8 mr-2" />
//             Book A Free Consulting
//           </button>
//         </div>
//         <div className="col-span-2 w-full">
//           <h1 className="text-white font-normal text-[90px] leading-none">
//             DIGITAL AGENCY
//           </h1>
//         </div>
//       </div>

//       <div>

//       </div>

//     </div>
//   );
// };

// export default Banner;
