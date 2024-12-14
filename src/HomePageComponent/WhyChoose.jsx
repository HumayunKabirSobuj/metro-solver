import star from '../HomePagePhoto/star.png';
const WhyChoose = () => {
  return (
    <div className="mt-[900px] mb-[100px] text-white">
      <div>
        <h2 className="text-6xl font-semibold w-[425px] mb-4">
          Why You Choose Metro Solver?
        </h2>
        <p className="text-[#F3F3F4] text-lg font-normal w-[425px] mb-8">
          We are constantly growing or learning and improving.Enter your
          personal real estate sanctuary, where finding the ideal home is
          effortless and comfortable with our assistance.
        </p>
      </div>
      <button className=" text-sxl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-2 px-7 flex items-center">
        <img src={star} alt="" />
        Book now
      </button>
    </div>
  );
};

export default WhyChoose;
