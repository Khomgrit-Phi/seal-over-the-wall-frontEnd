import banneranimation from "/assets/images/home/banner-animation.gif";

const Banner = () => {
  return (
    <>
    <section className=" w-400 mx-auto mt-50">
        <div 
          class=" bg-cover bg-center h-[223px]  justify-center"
          style={{ backgroundImage: `url(${banneranimation})` }}
        ></div>
      </section>
    
    </>
  )
}
export default Banner