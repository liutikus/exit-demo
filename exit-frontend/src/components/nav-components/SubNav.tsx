import PaddingContainer from "../PaddingContainer"
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react"
import { useEffect, useState } from "react"
import NavCardsContainer from "./NavCardsContainer"
import { fetchCategories } from "../../api/strapi"
import type { Category } from "../../types/types"
import { Link } from "react-router"



const SubNav = () => {

    const [hoveredCategory, setHoveredCategory] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [categories, setCategories] = useState<Category[] | null>(null)

    const handleMouseEnter = (category: string)=>{
        setHoveredCategory(category)
        setIsHovered(true)
    }

    const handelMouseLeave = ()=>{
        setIsHovered(false)

    } 

    useEffect(()=>{
        fetchCategories()
            .then(setCategories)
            .catch(console.error)
        },[])


  return (
    <div className="hidden md:block py-6 dark:text-white text-[var(--color-black)] border-b-1 border-[rgba(var(--color-gray-rgb),0.17)]">
        
      <PaddingContainer>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-8">
            {categories?.map(({title,slug, id})=>(
                <Link
                key={id}
                to ={`/shop`}>
                <div 
                onMouseEnter={()=>handleMouseEnter(title)}
                onMouseLeave={()=>handelMouseLeave()}
                className="flex items-baseline-last gap-2 cursor-pointer"
                >
                    <h3 className="font-bold">{title}</h3>
                    <div className="text-[var(--color-gray)]">
                    <ArrowIcon className={`transition-all transform ease-in-out duration-300 ${
                            hoveredCategory === title ? "rotate-180" : "rotate-0"
                        }`}/>

                    </div>
                </div>

                </Link>
            ))}

            </div>
            <div className="hidden xl:flex items-center gap-2">
                     <a href="#" className="border-1 dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]">Trade-In</a>
                     <a href="#" className="border-1 dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]">E-Bronique</a>
                     <a href="#" className="border-1 dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]">Service Centru</a>
                     <a href="#" className="border-1 dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]">Despre Noi</a>


            </div>

        </div>
        <NavCardsContainer category={hoveredCategory} isHovered = {isHovered}/>
      </PaddingContainer>
    </div>
  )
}

export default SubNav
