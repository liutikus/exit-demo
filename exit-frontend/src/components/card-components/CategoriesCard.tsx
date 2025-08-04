import RoundedBtn from "../buttons/RoundedBtn"

type CategoriesCardProps = {
    btnText: string,
    img: string
}

const CategoriesCard = ({btnText, img} : CategoriesCardProps) => {
  return (
<div className="relative">
  <img src={img} alt={btnText} className="w-full rounded-xl h-[280px] object-cover" />

  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

  <div className="absolute bottom-0 left-0 z-20 w-full flex justify-center pb-6">
    <RoundedBtn handleClick={()=>console.log()} text={btnText} isTextBlack={false} />
  </div>
</div>
  )
}

export default CategoriesCard
