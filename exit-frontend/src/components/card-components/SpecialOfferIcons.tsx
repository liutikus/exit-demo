import SaleIcon from "../../assets/icons/sale-icon.svg?react"
import UnpackedIcon from "../../assets/icons/unpacked-icon.svg?react"
import TopSoldIcon from "../../assets/icons/top-sold-icon.svg?react"
import { useState } from "react"

type SpecialOfferIconsProps = {
isSale:boolean,
isTop:boolean,
isNew:boolean,
isUnpacked:boolean,
discountPercentage: number | undefined
} 

const SpecialOfferIcons = ({isSale, discountPercentage, isTop, isNew, isUnpacked} : SpecialOfferIconsProps) => {

    const [isHovered,setIsHovered] = useState(false)

    const RenderIcon = ()=>{
        if(isSale){
            return (
                <div 
                className="text-white bg-[var(--color-red)] h-auto w-full p-2 rounded-lg cursor-pointer"
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                >
                    <div className={`font-bold text-sm flex  items-center transition-all ease-in-out duration-300 justify-around ${isHovered? "px-3 scale-100" : "px-0 "}`}>
                  -{discountPercentage}% <SaleIcon className={`transition-all ease-in-out duration-200 w-auto${isHovered? "scale-100 pl-3 opacity-100 h-5" : "scale-0 opacity-0 p-0 m-0 h-0"} `}/> 
                    </div>
                </div>
            )
        }if(isTop){
            return (
               <div 
                className="text-[var(--color-black)] bg-[var(--color-gold)] h-auto w-full p-2 rounded-lg cursor-pointer"
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                >
                    <div className={`font-bold text-sm flex  items-center transition-all ease-in-out duration-300 justify-around ${isHovered? "px-3 scale-100" : "px-0 "}`}>
                        <p className={`transition-all ease-in-out duration-300 ${isHovered? "text-md pr-3 w-25 opacity-100 h-5" : "scale-0 text-[0px] opacity-0 pr-0 m-0 w-0 h-0"} `}>Top Produs</p>
                        <TopSoldIcon className="h-5 w-auto"/> 
                    </div>
                </div>
            )
        }if(isNew){
            return (
               <div 
                className="text-[var(--color-black)] bg-[var(--color-accent)] h-auto w-full p-2 rounded-lg cursor-pointer"
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                >
                    <div className={`font-bold text-sm flex  items-center transition-all ease-in-out duration-300 justify-around ${isHovered? "px-4 scale-100" : "px-1 "}`}>
                       <p>New</p>
                    </div>
                </div>
            )
        }if(isUnpacked){
            return (
                <div 
                className="text-[var(--color-white)] bg-[var(--color-purple)] h-auto w-full p-2 rounded-lg cursor-pointer"
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                >
                    <div className={`font-bold text-sm flex  items-center transition-all ease-in-out duration-300 justify-around ${isHovered? "px-3 scale-100" : "px-0 "}`}>
                        <p className={`transition-all ease-in-out duration-300 ${isHovered? "text-md pr-3 w-25 opacity-100 h-5" : "scale-0 text-[0px] opacity-0 pl-0 m-0 w-0 h-0"} `}>Desigilat</p>
                        <UnpackedIcon className="h-5 w-auto"/> 
                    </div>
                </div>
            )
        }else{
            return
        }
    }

  return (
    <div className="absolute top-2 left-2">
      {RenderIcon()}
    </div>
  )
}

export default SpecialOfferIcons
