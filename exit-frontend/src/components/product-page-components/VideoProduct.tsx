import { BaseURL } from "../../api/strapi"
import type { VideoData } from "../../types/types"

type VideoProductProps ={
    video:VideoData
}

const VideoProduct = ({video}: VideoProductProps) => {
  return (
    <div  className="bg-[#FAFAFA]  relative mt-5 rounded-xl border-[rgba(var(--color-gray-rgb),0.13)] border-1">
    <div className="sm:flex items-stretch"> 
    <div className="w-[50%] overflow-hidden rounded-lg">
      <video
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-lg"
      >
        <source src={BaseURL + video.video.url} type="video/mp4" />
      </video>
    </div>
        <div className="px-4 py-5">
            <h2 className="font-bold pb-2">{video.title}</h2>
            <p className="text-sm">{video.subTitleText}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoProduct
