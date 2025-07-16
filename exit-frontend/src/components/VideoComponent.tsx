import { BaseURL } from "../api/strapi"

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
) : (
  <p>Loading video...</p>
)}
                </div>
  )
}

export default VideoComponent
