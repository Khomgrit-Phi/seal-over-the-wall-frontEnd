import facebook from '../assets/images/facebook-icon.svg';
import twitter from '../assets/images/x-twitter-icon.svg';
import instagram from '../assets/images/instagram-icon.svg';
import youtube from '../assets/images/youtube-icon.svg';
import tiktok from '../assets/images/tiktok-icon.svg';
import footerlogo from '../assets/images/custommike-footer-logo.svg';

const Footer = () => {
  return (
    <>
    <section id="footer" className="bg-[#202020] text-white p-10">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full md:w-120">
          <img
            src={footerlogo}
            alt=""
            className="logo w-40"
          />
          <h3 className="text-4xl mt-4">
            Stay in the loop! Sign up <br />for exclusive news & deals!
          </h3>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-4 pr-10 py-2 border rounded-full bg-gray-100 mt-4 text-black focus:outline-none focus:ring focus:ring-blue-300"
            />

            <i
              className="fa-solid fa-arrow-right absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-900"
            ></i>
          </div>


          <p className="text-lg mt-6">
            By signing up to receive emails from custom mike?. you agree to our
            Privacy Policy. We treat your info responsibly
          </p>
        </div>
        <div className="w-full md:w-120 mt-10">
          <div className="flex justify-between">
            <div className="">
              <h4 className="text-xl font-semibold">Product</h4>
              <ul className="text-xl leading-8">
                <li><a href="#">Shirt</a></li>
                <li><a href="#">Mug</a></li>
                <li><a href="#">Tote Bag</a></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Creator</h4>
              <ul className="text-xl">
                <li><a href="#">Artists</a></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">About</h4>
              <ul className="text-xl leading-8">
                <li><a href="#">News</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <img src={facebook} alt="" className="w-8" />
            <img src={twitter} alt="" className="w-8" />
            <img src={instagram} alt="" className="w-8" />
            <img src={youtube} alt="" className="w-8" />
            <img src={tiktok} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </section>

      
    </>
  )
}
export default Footer