import { useEffect, useState } from "react"
import PaddingContainer from "../PaddingContainer"
import {fetchMainVideo } from "../../api/strapi"
import type { VideoData } from "../../types/types"
import ColoredBtn from "../buttons/ColoredBtn"
import VideoComponent from "../VideoComponent"

const VideoSection = () => {

    const [videoData, setVideoData] = useState<VideoData | null>(null)

    useEffect(()=>{
        fetchMainVideo()
            .then(setVideoData)
            .catch(console.error)
    },[])

  return (
    <section className="bg-[var(--color-black)] text-white py-15">
        <PaddingContainer>
            <div>
                <div className="md:flex pb-6 justify-between items-center">
                    <div>

                    <h2 className="text-2xl font-bold pb-2 md:pb-0 md:w-[80%]">{videoData?.title}</h2> 
                    </div>
                    <ColoredBtn text="Fii Primul"/>

                </div>
               <VideoComponent videoUrl = {videoData?.video.url}/>
            </div>
        </PaddingContainer>
    </section>
  )
}

export default VideoSection
