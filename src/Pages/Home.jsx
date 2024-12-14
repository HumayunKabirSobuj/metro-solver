import Banner from "../HomePageComponent/Banner"
import Navbar from "../utils/Navbar"

const Home = () => {
  return (
    <div >
      <div className='bg-custom-gradient fixed top-0 left-0 w-full min-h-screen -z-10'>

      </div>
      <div className='max-w-screen-2xl mx-auto h-screen pt-5 px-5 z-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
    </div>
  )
}

export default Home
