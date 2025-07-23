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

const TradeInPage = () => {

    const [videoData, setVideoData] = useState<VideoData | null>(null)

    useEffect(()=>{
        fetchTradeInVideo()
            .then(setVideoData)
            .catch(err=>console.error(err.message))
    },[])
console.log(videoData)
  return (
    <div className="bg-[var(--color-black)] text-white">
      <NavBar isDark={true}/>
      <TradeInHero/>
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
