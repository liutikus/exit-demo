import { Link, useNavigate } from "react-router"
import RoundedBtn from "../buttons/RoundedBtn"

type ServiceCardProps = {
    title:string,
    btnText:string,
    img:string
    link:string

}

const ServiceCard = ({title, btnText, img, link} : ServiceCardProps) => {
  const navigate = useNavigate()
  return (
    <div className="relative flex flex-col h-auto sm:h-[250px] lg:h-full bg-[#F5F5F7] text-center items-center border-1 rounded-2xl border-[rgba(var(--color-gray-rgb),0.26)] text-[var(--color-black)]">
      <div className="absolute pt-2 xl:pt-4 px-2">
      <h2 className="text-lg lg:text-2xl font-bold py-2 xl:py-4">{title}</h2>
      <Link
      to={link}
      >
      <RoundedBtn handleClick={()=>navigate(link)} text={btnText} isTextBlack={true}/>
      </Link>

      </div>
      <div className="mt-auto">

      <img
      className=" h-auto  object-contain"
      src={img} alt={title} />
      </div>
    </div>
  )
}

export default ServiceCard
