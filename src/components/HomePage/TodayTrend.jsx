import staffpick from "/assets/images/home/staff-pick.png";
import artistsportlight from "/assets/images/home/artist-sportlight.png";
import trendy from "/assets/images/home/trendy.png";
const TodayTrend = () => {
  return (
    <>
    <section className="h-[620px] w-400 mx-auto">
            <div
            data-aos="fade-up" data-aos-duration="2000" class="py-10 ">
              <h3 class="text-5xl font-bold text-primary-blue-500">
                Today’s Trend
              </h3>
              <p class="text-2xl">The inspiration for your everyday vibes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div 
                className="flex flex-1 h-[620px] bg-cover bg-center relative justify-center"
                style={{ backgroundImage: `url(${staffpick})` }}
              >
                <h5 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-semibold text-white absolute bottom-20">
                  Staff pick
                </h5>
              </div>
              <div 
                className="flex flex-1 h-[620px] bg-cover bg-center relative justify-center"
                style={{ backgroundImage: `url(${artistsportlight})` }}
              >
                <h5 data-aos="fade-up" data-aos-duration="2000" className="text-5xl font-semibold text-white absolute bottom-20">
                  Artist Spotlight
                </h5>
              </div>
              <div 
                className="flex flex-1 h-[620px] bg-cover bg-center relative justify-center"
                style={{ backgroundImage: `url(${trendy})` }}
              >
                <h5 data-aos="fade-up" data-aos-duration="3000" className="text-5xl font-semibold text-white absolute bottom-20">
                  Trendy
                </h5>
              </div>
            </div>
          </section>
      

    </>
  )
}
export default TodayTrend