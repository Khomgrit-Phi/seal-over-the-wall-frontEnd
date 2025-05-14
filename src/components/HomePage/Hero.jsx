import animation from "../../assets/images/videos/hero-section_1920x900.mp4"

const Hero = () => {
  return (
    <div className="w-full h-[900px] relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={animation}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10">
        {/* overlay content goes here */}
      </div>
    </div>
  );
};

export default Hero;