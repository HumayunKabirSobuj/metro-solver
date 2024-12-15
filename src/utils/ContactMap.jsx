import map from '../utilsPhoto/map.png';
import telephone from '../utilsPhoto/telephone.png';
import call from '../utilsPhoto/call.png';
import location from '../utilsPhoto/location.png';
import minilocation from '../utilsPhoto/minilocation.png';

const ContactMap = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 lg:mb-[100px]">
      {/* Background Map */}
      <div
        className="relative w-full max-w-7xl h-[600px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${map})` }} // Correct way to use the image
      >
        {/* Location Markers */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-10 h-10 rounded-full shadow-md">
            <img src={location} alt="" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2">
          <div className="w-10 h-10 rounded-full shadow-md">
            <img src={location} alt="" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[70%]">
          <div className="w-10 h-10 rounded-full shadow-md">
            <img src={location} alt="" />
          </div>
        </div>
        <div className="absolute bottom-[15%] left-[25%]">
          <div className="w-10 h-10 rounded-full shadow-md">
            <img src={location} alt="" />
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="absolute top-[15%] right-[10%] w-[485px] bg-gray-800 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold  text-white"><span className='border-2 border-[#C16EFD] p-2 rounded-full'>#1</span> Metro Solver</h3>
          <div className="flex gap-5 items-center">
            <img className="h-5 w-5" src={minilocation} alt="" />
            <p className="text-[#F3F3F4] text-lg mt-2 ">
              Head office: Metro Solver Limited Grantham Road, London E12 5LX,
              United Kingdom
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center  gap-4 text-lg">
              <div className="w-5 h-5 shadow-md">
                <img src={call} alt="" />
              </div>

              <p className="text-white">+447936 455446</p>
            </div>
            <div className="flex items-center gap-4 text-lg">
            <div className="w-5 h-5 shadow-md">
                <img src={call} alt="" />
              </div>
              <span className="text-white">+447464850205</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
            <div className="w-5 h-5 shadow-md">
                <img src={telephone} alt="" />
              </div>
              <span className="text-white">02064844</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
