import PaddingContainer from "./PaddingContainer"

type HeroProps = {
    children: React.ReactNode
    img:string
}

const Hero = ({children, img} : HeroProps) => {
  return (
     <section className="py-6 md:py-12">
        <PaddingContainer>
          <div className="bg-[var(--color-black)]  rounded-2xl">

         <div className=" w-full  rounded-2xl bg-[linear-gradient(to_right,_#121212_60%,_rgba(var(--color-accent-rgb),0.3)_100%)] flex py-5 md:py-10 ">




  
     <div className="w-[50%] lg:w-[30%] pl-4 md:pl-20">
      <div className="text-white ">
   {children}

      </div>
  </div>
    <div className=" w-[50%] lg:w-[70%] bottom-0 right-0">
      <img src={img} alt="image" />
    </div>
    </div>
          </div>


          </PaddingContainer>      
    </section>
  )
}

export default Hero
