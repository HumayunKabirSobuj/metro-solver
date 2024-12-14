import vid from "../assets/vid.png";
const HowToWorks = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-6xl font-semibold text-white">How To Works?</h2>
        <p className="text-[#F3F3F4] text-lg font-normal mt-4 w-[40rem]]">
          Based on the description of Metro Solver and the image provided, here
          is a 6- <br />step process that Metro Solver uses to scale a customers
          business
        </p>
      </div>
      <div className="flex justify-center py-12">
        <img src={vid} alt="vid" />
      </div>
    </div>
  );
};

export default HowToWorks;
