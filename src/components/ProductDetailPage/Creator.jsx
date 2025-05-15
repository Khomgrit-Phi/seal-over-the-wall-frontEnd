import iconIg from "/assets/images/productDetail/icon-ig.svg";
import iconFb from "/assets/images/productDetail/icon-fb.svg";
import iconX from "/assets/images/productDetail/icon-x.svg";
import logoCustommike from "/assets/images/productDetail/custommike-navbar-logo.svg";
import logoEco from "/assets/images/productDetail/ECO.svg";
import logoResponsible from "/assets/images/productDetail/Responsible.svg";
import logoOrganic from "/assets/images/productDetail/Organic.svg";
const Creator = () => {
  return (
    <div>
      <div className="flex items-center gap-8 py-8 border-b-1 border-gray-200">
        <div className="flex flex-col">
          <img src={logoCustommike} alt="" className="w-[272px]" />
          <p className="text-xl font-semibold">Create Collect and Express</p>
        </div>
        <div className="flex gap-4">
          <img src={logoResponsible} alt="" className="h-[56px] w-auto" />
          <img src={logoEco} alt="" className="h-[56px] w-auto" />
          <img src={logoOrganic} alt="" className="h-[56px] w-auto" />
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-b-1 border-gray-200">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-[#334DD8] rounded-full text-white flex items-center justify-center text-2xl font-semibold">
            AL
          </div>
          <p className="pl-4 text-2xl font-semibold">Artists Lalala</p>
          <button className="bg-[#334DD8] px-12 py-2 rounded-full text-white ml-20">
            Follow
          </button>
        </div>

        <div className="w-1/2">
          <p className="text-xl ">
            30% of the money made from this campaign will be donated to Shelter,
            a TH based housing charity. Designed by @Artists Lalala on
            instagram.
          </p>
          <div className="flex gap-5 mt-4 text-xl font-semibold">
            <p className="flex items-center gap-2">
              <img src={iconIg} alt="Instagram Icon" /> Artists Lalala
            </p>

            <p className="flex items-center gap-2">
              <img src={iconX} alt="Instagram Icon" /> Artists Lalala
            </p>

            <p className="flex items-center gap-2">
              <img src={iconFb} alt="Instagram Icon" /> Artists Lalala
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Creator;
