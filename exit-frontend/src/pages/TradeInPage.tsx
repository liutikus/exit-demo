import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/nav-components/NavBar"
import TradeInHero from "../components/trade-in-page-coponents/TradeInHero"
import TradeStepsGrid from "../components/trade-in-page-coponents/TradeStepsGrid"
import VideoComponent from "../components/VideoComponent"
import type { VideoData } from "../types/types"
import { fetchTradeInVideo } from "../api/strapi"
import PaddingContainer from "../components/PaddingContainer"
import FaqSection from "../components/FaqSection"
import TradeInCalculator from "../components/trade-in-page-coponents/TradeInCalculator"

const TradeInPage = () => {

    const [videoData, setVideoData] = useState<VideoData | null>(null)
    const [isCalculatorOpen,setIsCalculatorOpen] = useState(false)

    useEffect(()=>{
        fetchTradeInVideo()
            .then(setVideoData)
            .catch(err=>console.error(err.message))
    },[])
  return (
    <div className="bg-[var(--color-black)] text-white">
      <NavBar isDark={true}/>
      <TradeInCalculator 
      isOpen={isCalculatorOpen}
      handleClose={()=>setIsCalculatorOpen(false)}
      />
      <TradeInHero handleClick={()=>setIsCalculatorOpen(true)}/>
      <TradeStepsGrid/>
      <div
      className="py-10"
      >
      <PaddingContainer>
      <VideoComponent videoUrl={videoData?.video.url}/>
      </PaddingContainer>
      </div>
      <FaqSection />
      <Footer/>

    </div>
  )
}

export default TradeInPage
