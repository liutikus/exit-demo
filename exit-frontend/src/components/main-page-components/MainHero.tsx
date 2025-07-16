import { useEffect, useState } from "react"
import { BaseURL, fetchMainHero } from "../../api/strapi"
import type { HeroData } from "../../types/types"
import ColoredBtn from "../buttons/ColoredBtn"
import Hero from "../Hero"

const MainHero = () => {

  const [heroData, setHeroData] = useState<HeroData | null>(null)

  useEffect(()=>{
    fetchMainHero()
      .then(setHeroData)
      .catch(console.error)
  },[])

  return (
   <Hero img={BaseURL + heroData?.image.url}>
        <a href="#" className="hidden sm:inline px-5 lg:px-10 font-semibold border-1 py-3 rounded-full border-[var(--color-accent)]  hover:text-white hover:bg-[var(--color-accent)] transition-all ease-in-out duration-200 cursor-pointer text-[var(--color-accent)]">Descoperă viitorul!</a>
        <h1 className="md:text-2xl xl:text-5xl pt-2 pb-2 sm:pt-4 sm:pb-3 lg:pt-5 lg:pb-8 font-bold">{heroData?.title}</h1>
        <h2 className="text-sm md:text-lg pb-4 sm:pb-10 text-[var(--color-gray)]">{heroData?.sub_title}</h2>
        <ColoredBtn text="Fii Primul"/>
   </Hero>
  )
}

export default MainHero
