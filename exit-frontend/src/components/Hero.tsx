import PaddingContainer from "./PaddingContainer"
import HeroBg from "/public/img/bg/main-hero-bg.png"

type HeroProps = {
    children: React.ReactNode
    img:string
}

const Hero = ({children, img} : HeroProps) => {
  return (
     <section className="py-6 md:py-12">
        <PaddingContainer>
         <div className="relative w-full rounded-2xl bg-black">

  <img
    src={HeroBg}
    alt="Hero background"
    className="w-full h-auto block rounded-2xl"
  />


  <div className="absolute inset-0 z-20 flex justify-arround items-center">
     <div className="w-[50%] lg:w-[30%] pl-4 md:pl-20">
      <div className="text-white ">
   {children}

      </div>
    <div className="absolute w-[50%] lg:w-[70%] bottom-0 right-0">
      <img src={img} alt="image" />
    </div>
  </div>
    </div>
</div>

          </PaddingContainer>      
    </section>
  )
}

export default Hero
