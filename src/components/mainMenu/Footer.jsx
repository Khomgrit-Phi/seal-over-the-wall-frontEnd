import facebook from '../../assets/images/facebook-icon.svg';
import twitter from '../../assets/images/x-twitter-icon.svg';
import instagram from '../../assets/images/instagram-icon.svg';
import youtube from '../../assets/images/youtube-icon.svg';
import tiktok from '../../assets/images/tiktok-icon.svg';
import footerlogo from '../../assets/images/custommike-footer-logo.svg';

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section id="footer" className="bg-[#202020] text-white p-10">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full md:w-110">
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
              className="w-full pl-4 pr-10 py-2 border rounded-3xl bg-gray-100 mt-4 text-black focus:outline-none focus:ring focus:ring-blue-300"
            />

            <i
              className="fa-solid fa-arrow-right absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-900"
            ></i>
          </div>


          <p className="text-lg mt-6">
            By signing up to receive emails from custom mike?. you agree to our <span className="underline">Privacy Policy.</span> We treat your info responsibly
          </p>
        </div>
        <div className="w-full md:w-200 mt-10">
          <div className="flex justify-between">
          <div className="">
              <h4 className="text-xl font-semibold">Collection</h4>
              <ul className="text-xl leading-8">
                <li><Link to="#">Staff Pick</Link></li>
                <li><Link to="#">Artist Spotlight</Link></li>
                <li><Link to="#">Trendy</Link></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Product</h4>
              <ul className="text-xl leading-8">
                <li><Link to="#">Shirt</Link></li>
                <li><Link to="#">Mug</Link></li>
                <li><Link to="#">Tote Bag</Link></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Artist</h4>
              <ul className="text-xl">
                <li><Link to="#">Creators Corner</Link></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">DIY</h4>
              <ul className="text-xl leading-8">
                <li><Link to="#">How to Work</Link></li>
                <li><Link to="#">Express yourself</Link></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">About</h4>
              <ul className="text-xl leading-8">
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Faq</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="flex gap-4 items-center justify-end">
            <img src={facebook} alt="" className="w-8" />
            <img src={twitter} alt="" className="w-8" />
            <img src={instagram} alt="" className="w-8" />
            <img src={youtube} alt="" className="w-8" />
            <img src={tiktok} alt="" className="w-8" />
            </div>
            <div className="flex gap-4 items-center justify-end mt-4">
            <p>© 2025 Custommike. All rights reserved.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>

      
    </>
  )
}
export default Footer