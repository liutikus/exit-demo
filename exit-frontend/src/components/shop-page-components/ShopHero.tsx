import { useEffect, useState } from "react"
import Hero from "../Hero"
import { BaseURL, fetchShopHero } from "../../api/strapi"
import type { HeroData } from "../../types/types"

const ShopHero = () => {

    const [shopHeroData,setShopHeroData] = useState<HeroData | null>(null)

    useEffect(()=>{
        fetchShopHero()
            .then(setShopHeroData)
            .catch(console.error)
    },[])


  return (
    <div>
        <Hero img={BaseURL + shopHeroData?.image.url}>
            {
                <div className="text-white">
                    <h1 className="md:text-2xl xl:text-5xl pt-2 pb-2 sm:pt-4 sm:pb-3 lg:pt-5 lg:pb-8 font-bold"><span className="text-[var(--color-accent)]">
                        {shopHeroData?.highlighted_title}</span>{shopHeroData?.title}</h1>
                </div>
            }
        </Hero>
    </div>
  )
}

export default ShopHero
