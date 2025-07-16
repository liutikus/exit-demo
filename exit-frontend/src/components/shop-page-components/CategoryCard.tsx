import IPhoneIcon from "../../assets/category-icons/iphone-icon.svg?react"
import LaptopIcon from "../../assets/category-icons/laptop-icon.svg?react"
import AccesoriesIcon from "../../assets/category-icons/accesories-icon.svg?react"
import EntertainmentIcon from "../../assets/category-icons/entertainment-icon.svg?react"
import WatchIcon from "../../assets/category-icons/watch-icon.svg?react"
import { useState } from "react"
import type { Category } from "../../types/types"

type CategoryCardProps = {
  slug:string
  title:string,
  subCategories: Category[]
}

const CategoryCard = ({slug, title, subCategories} : CategoryCardProps) => {

  const [isOpen,setIsOpen] = useState(false)

    const getCategoryIcon = (slug: string) =>{
    switch(slug){
        case "cellphones-and-accessories": 
        return (<IPhoneIcon className="w-[18px] h-[18px]"/>)
        break;
        case "mac-book-and-computers": 
        return (<LaptopIcon className="w-[18px] h-[18px]"/>)
        break;
        case "entertainment": 
        return (<EntertainmentIcon className="w-[18px] h-[18px]"/>)
        break;
        case "accesories": 
        return (<AccesoriesIcon className="w-[18px] h-[18px]"/>)
        break;
        case "watch": 
        return (<WatchIcon className="w-[18px] h-[18px]"/>)
        break;
    }
}
  return (
    <div className="border-1 p-2 border-[rgba(var(--color-gray-rgb),0.26)] rounded-xl my-4">
       
    <div className="flex gap-4 justify-between   items-center">
      <div className="flex gap-3 items-center ">
      {getCategoryIcon(slug)}
      <h3 className="font-bold w-max">{title}</h3>
      <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold">20</p>

      </div>
      {subCategories.length === 0? null : (
      <button 
      className={`border-1 rounded-md text-xl w-[35px] pb-[5px] transition-all ease-in-out duration-300 cursor-pointer  font-bold border-[var(--color-accent)]
      hover:bg-[var(--color-accent)]
     `}
      onClick={()=>setIsOpen(!isOpen)}
      >
        {isOpen ? "-":"+"}
        </button>

      )}
    
    </div>

    <div  className={`overflow-hidden py-1 transition-all duration-500 ease-in-out transform ${
          isOpen ? " opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}>
          {subCategories?.map(({title}, index)=>(
            <div
            key={index}
            className="py-2 opacity-70 flex gap-2 items-center"
            >
              <p className="text-sm">{title}</p>
      <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold opacity-50">20</p>

              
            </div>
          ))}
        </div>
    </div>
  )
}

export default CategoryCard
