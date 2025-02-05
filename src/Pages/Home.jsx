import Banner from '../HomePageComponent/Banner';
import HowToWorks from '../HomePageComponent/HowToWorks';
import WhyChoose from '../HomePageComponent/WhyChoose';
import ReviewsSlider from '../HomePageComponent/ReviewsSlider';
import Navbar from '../utils/Navbar';
import LatestWork from '../HomePageComponent/LatestWork';
import OurService from '../HomePageComponent/OurService';
import ContactForm from '../HomePageComponent/ContactForm';

const Home = () => {
  return (
    <div>
      <div className="bg-custom-gradient fixed top-0 left-0 w-full min-h-screen -z-10"></div>
      <div className="max-w-screen-2xl mx-auto h-screen pt-5 px-5 z-10">
        <Navbar></Navbar>
        <Banner></Banner>
        <HowToWorks />
        <WhyChoose />
        <LatestWork />
        <ReviewsSlider></ReviewsSlider>
        <OurService></OurService>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Home;
