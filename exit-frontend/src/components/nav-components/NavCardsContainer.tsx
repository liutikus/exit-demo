import { useEffect, useState } from "react"
import type { Product } from "../../types/types"
import { BaseURL, fetchProducts } from "../../api/strapi"
import SpecialOfferIcons from "../card-components/SpecialOfferIcons"
import { pageSize } from "../../data/data"



type NavCardsConatainerProps = {
    category: string,
    isHovered: boolean
}

const NavCardsContainer = ({category, isHovered}: NavCardsConatainerProps) => {

    const [isContainerHovered, setIsContainerHovered] = useState(false)
    const [products, setProducts] = useState< Product[] | null>(null)

    useEffect(()=>{
        fetchProducts(1, pageSize)
            .then(setProducts)
            .catch(console.error)
    },[])

    const filtredProducts= products?.filter((product)=> product.category.title === category)


  return (
    <div 
    className={`${isHovered || isContainerHovered ? "absolute" : "hidden"} top-39 left-0 w-full   pt-10 z-1000`} 
    onMouseEnter={()=>setIsContainerHovered(true)}
    onMouseLeave={()=>setIsContainerHovered(false)}
    >
        
        <div className="flex flex-wrap justify-arround bg-[var(--color-light-gray)] pb-5 dark:bg-black px-30 pt-5  gap-6">
            {filtredProducts?.map((product)=>(
                <div
                 key={product.id}
                 className="relative flex-col  items-center text-center border-1 px-4 pt-13 pb-4 rounded-xl border-[rgba(var(--color-gray-rgb),0.26)]"
                 >
                    <div>
                        <img className="h-[200px] w-auto" src={BaseURL + product.mainImage.url} alt={product.title} />
                        <h2 className="font-bold pt-4">{product.title}</h2>
                    </div>
                    
                        <SpecialOfferIcons isNew ={product.is_new} isSale={product.is_on_sale} discountPercentage={product.discountPercentage} isTop={product.is_top_sold} isUnpacked={product.is_unpacked} />
                    
                    
                </div>
            ))}   
        </div>
    </div>
  )
}

export default NavCardsContainer
