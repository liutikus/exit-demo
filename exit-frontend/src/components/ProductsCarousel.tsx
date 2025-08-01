import PaddingContainer from "./PaddingContainer"
import ArrowIcon from "../assets/icons/arrow-direction-icon.svg?react"
import SimpleBtn from "./buttons/SimpleBtn"
import { useRef } from "react"
import type { Product } from "../types/types"
import ProductCard from "./card-components/ProductCard"
import { Link } from "react-router"


type ProductsCarouselProps = {
    title: string,
    isDark: boolean,
    products: Product[] | null
}

const ProductsCarousel = ({title, isDark, products} : ProductsCarouselProps) => {

 
    const carouselRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

  

    const scrollCarousel = (direction : "left" | "right")=>{

        const cardWidth = cardRef.current?.offsetWidth || 260
        const scrollAmount = direction === "left" ? -cardWidth -24 : cardWidth + 24

        carouselRef.current?.scrollBy({left: scrollAmount, behavior:"smooth"})

    }



  return (
    <section className={` py-15 dark:text-white dark:bg-[var(--color-black)] text-[var(--color-black)]
    ${isDark ? "dark" : ""}
    `}>
      <PaddingContainer>
        <div className="md:flex items-center gap-6">
            <div>
                <h1 className="font-bold text-3xl">{title}</h1>
            </div>
            <div className="hidden md:flex items-center gap-3">
                 <Link
            to={"/shop"}>
                <div>
                <SimpleBtn isSquare={false}>
                    <p>Vezi toate produsele</p>
                </SimpleBtn>

                </div>
            </Link>
                <div 
                onClick={()=>{scrollCarousel("left")}}
                >
                <SimpleBtn isSquare={true}>
                    <ArrowIcon className="rotate-180"/>
                </SimpleBtn>

                </div>
                <div
                onClick={()=>{scrollCarousel("right")}}
                >
                <SimpleBtn isSquare={true}>
                    <ArrowIcon/>
                </SimpleBtn>

                </div>

            </div>
        </div>

        <div className="relative pt-4 md:pt-12 ">
        <div 
        ref={carouselRef}
        className="flex gap-6  overflow-x-auto no-scrollbar">
            {products?.map((product,index)=>(
                <div 
                ref={index === 0 ? cardRef : null}

                key={product.id}
                className="shrink-0">
                    <ProductCard product={product} isDark={isDark}/>
                </div>
            ))}
           
          
        </div>

        </div>
        <div className="flex md:hidden items-center justify-between gap-3 pt-2">
            <Link
            to={"/shop"}>
                <div>
                <SimpleBtn isSquare={false}>
                    <p>Vezi toate produsele</p>
                </SimpleBtn>

                </div>
            </Link>
                <div className="flex gap-1">
                <div 
                onClick={()=>{scrollCarousel("left")}}
                >
                <SimpleBtn isSquare={true}>
                    <ArrowIcon className="rotate-180"/>
                </SimpleBtn>

                </div>
                <div
                onClick={()=>{scrollCarousel("right")}}
                >
                <SimpleBtn isSquare={true}>
                    <ArrowIcon/>
                </SimpleBtn>

                </div>

                </div>

            </div>
      </PaddingContainer>
    </section>
  )
}

export default ProductsCarousel
