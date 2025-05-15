import ads1 from "/assets/images/shop/ads/ads-1.png";
import ads2 from "/assets/images/shop/ads/ads-2.png";
import ads3 from "/assets/images/shop/ads/ads-3.png";
import artist from "/assets/images/videos/Artist.mp4"

const AdsBanner = () => {
  return (
    <section className=" mx-auto  flex flex-row gap-4 h-full">
      <div className="w-2/10 rounded-2xl overflow-hidden relative">
        <img
          src={ads1}
          alt="New Artist Collaboration Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5">
          <p className="text-black text-2xl font-bold leading-6">
            New Artist Collaboration Collection
          </p>
          <p>April 2025</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-5/10">
        <div className="h-2/5 rounded-2xl overflow-hidden">
          <img
            src={ads2}
            alt="Pre Order Now"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-3/5 rounded-2xl overflow-hidden relative">
          <img
            src={ads3}
            alt="Green Mood"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5">
            <p className="text-white">The new tote bags</p>
            <p className="text-white text-2xl font-bold leading-6">
              Green Mood
            </p>
          </div>
          <div className="absolute bottom-5 right-5">
            <p className="text-white text-[40px] font-bold leading-6">
              Out Now!
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-3/10 rounded-xl overflow-hidden">
       <video
      src={artist}
      autoPlay
     loop
     muted
     playsInline
     className="w-full h-full object-cover"
     />
    </div>
    </section>
  );
};
export default AdsBanner;
