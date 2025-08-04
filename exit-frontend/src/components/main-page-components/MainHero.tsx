import { useEffect, useState } from "react"
import { BaseURL, fetchMainHero } from "../../api/strapi"
import type { HeroData } from "../../types/types"
import ColoredBtn from "../buttons/ColoredBtn"
import PaddingContainer from "../PaddingContainer"
import BgImage from "/img/bg/main-hero-bg.png"
import LoadingSpinner from "../LoadingSpinner"

const MainHero = () => {

  const [heroData, setHeroData] = useState<HeroData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetchMainHero()
      .then(setHeroData)
      .catch(console.error)
      .finally(()=>setLoading(false))
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

 <div className="relative sm:flex items-center">
   <div className="sm:w-[50%] lg:w-[30%] pl-4 md:pl-20  text-white z-10">
     <button className="hidden sm:inline px-5 lg:px-10 font-semibold border-1 py-3 rounded-full border-[var(--color-accent)] hover:text-white hover:bg-[var(--color-accent)] transition-all ease-in-out duration-200 cursor-pointer text-[var(--color-accent)]">
       Descoperă viitorul!
     </button>
     <h1 className="md:text-2xl xl:text-5xl pb-2  sm:pb-3  lg:pb-8 font-bold">{heroData?.title}</h1>
     <h2 className="text-sm md:text-lg pb-0 lg:pb-2  text-[var(--color-gray)]">{heroData?.sub_title}</h2>
     <div className="py-2">
     <ColoredBtn text="Fii Primul" isTextBold={true} />

     </div>
   </div>

   <div className="sm:w-[50%] lg:w-[70%] z-10">
    {loading ? (<LoadingSpinner/>) : (
      <img src={BaseURL + heroData?.image.url} alt="image" />
    )}
   </div>
 </div>
</div>


      </PaddingContainer>
    </div>
 )
}

export default MainHero
