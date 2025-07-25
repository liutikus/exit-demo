import { useEffect, useState } from "react"
import { BaseURL, fetchMainHero } from "../../api/strapi"
import type { HeroData } from "../../types/types"
import ColoredBtn from "../buttons/ColoredBtn"
import PaddingContainer from "../PaddingContainer"
import BgImage from "/img/bg/main-hero-bg.png"

const MainHero = () => {

  const [heroData, setHeroData] = useState<HeroData | null>(null)

  useEffect(()=>{
    fetchMainHero()
      .then(setHeroData)
      .catch(console.error)
  },[])

  return (
    <div className="pt-15">

      <PaddingContainer>
  <div className="relative bg-[var(--color-black)] rounded-2xl overflow-hidden">
 <div
   className="absolute inset-0  bg-center bg-cover"
   style={{ backgroundImage: `url(${BgImage})` }}
 />

 <div className="absolute inset-0 bg-[var-color-acccent] opacity-50" />

 <div className="relative flex items-center">
   <div className="w-[50%] lg:w-[30%] pl-4 md:pl-20 text-white z-10">
     <button className="hidden sm:inline px-5 lg:px-10 font-semibold border-1 py-3 rounded-full border-[var(--color-accent)] hover:text-white hover:bg-[var(--color-accent)] transition-all ease-in-out duration-200 cursor-pointer text-[var(--color-accent)]">
       Descoperă viitorul!
     </button>
     <h1 className="md:text-2xl xl:text-5xl pt-2 pb-2 sm:pt-4 sm:pb-3 lg:pt-5 lg:pb-8 font-bold">{heroData?.title}</h1>
     <h2 className="text-sm md:text-lg pb-4 sm:pb-10 text-[var(--color-gray)]">{heroData?.sub_title}</h2>
     <ColoredBtn text="Fii Primul" isTextBold={true} />
   </div>

   <div className="w-[50%] lg:w-[70%] z-10">
     <img src={BaseURL + heroData?.image.url} alt="image" />
   </div>
 </div>
</div>


      </PaddingContainer>
    </div>
 )
}

export default MainHero
