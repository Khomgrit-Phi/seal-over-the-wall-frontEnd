const Hero = () => {
  return (
    <div className="w-full h-[900px] relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dvpnipb6g/video/upload/v1746519012/q8jqkijpcq2ge0tmxppk.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10">
        {/* Your overlay content goes here */}
      </div>
    </div>
  );
};

export default Hero;
