import { BaseURL } from "../api/strapi"
import LoadingSpinner from "./LoadingSpinner"

type VideoComponentProps =  {
    videoUrl: string | undefined
}

const VideoComponent = ({videoUrl} : VideoComponentProps) => {
  return (
     <div className=" rounded-2xl border-[rgba(var(--color-gray-rgb),0.26)] border-1">
    {videoUrl ? (
  <video  muted loop playsInline className="w-full rounded-2xl h-auto ">
    <source src={BaseURL + videoUrl} type="video/mp4" />
  </video>
) : (<div className="py-20">
  <LoadingSpinner/>

</div>
)}
                </div>
  )
}

export default VideoComponent
