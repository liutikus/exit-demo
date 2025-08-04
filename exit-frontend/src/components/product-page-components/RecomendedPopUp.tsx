import { useEffect, useState } from "react"
import type { Product } from "../../types/types"
import PopUp from "../PopUp"
import { BaseURL, fetchProductsByBrandAndCategory } from "../../api/strapi"
import LoadingSpinner from "../LoadingSpinner"
import RoundedBtn from "../buttons/RoundedBtn"
import { useCart } from "../../hooks/useCart"
import SquareBtn from "../buttons/SquareBtn"

type RecomendedPopUpProps ={
    isOpen:boolean
    setIsOpen: (val:boolean) =>void 
    product: Product
    addMainProductToCart:()=>void
}

const RecomendedPopUp = ({isOpen,addMainProductToCart, setIsOpen,product}: RecomendedPopUpProps) => {

    const [loading, setLoading] = useState(false)
    const [recomendedProducts, setRecomendedProducts] = useState<Product[] | null>(null)
    const {addToCart} = useCart()

    useEffect(()=>{
        setLoading(true)
        fetchProductsByBrandAndCategory(
            product.brand.name, 1,3
        )
        .then(setRecomendedProducts)
        .catch(err=>console.error(err.message))
        .finally(()=>setLoading(false))
    },[])
  return (
    <div>
      <PopUp isDark={false} isOpen={isOpen} handleClose={()=>setIsOpen(false)}>
        {loading ? (<LoadingSpinner/>) : (
            <div className="text-center px-8">
                <h2 className="font-bold text-4xl pb-5">Va fi perfect împreună</h2>
                {recomendedProducts?.map((product)=>(
                    <div
                    key={product.id}
                    className="flex bg-[var(--color-bg-white)] items-center my-4 p-4 rounded-lg w-full justify-between"
                    ><div className="flex  items-center">
                         <div className="w-20 h-20 overflow-hidden">
                              <img
                                src={BaseURL + product.mainImage.url}
                                alt={product.title}
                                className="object-cover w-full h-full rounded"
                              />
                            </div>
                            <div className="pl-4 text-start ">
                                <h4 className=" text-xl opacity-90 py-1 font-semibold">{product.title}</h4>
                                <p className="opacity-70">{product.start_price.toLocaleString()} Lei</p>
                            </div>
                    </div>
                                <RoundedBtn text="Adaugă în coș" handleClick={()=>addToCart({
                                id:product.id,
                                product,
                                quantity:1
                            })} isTextBlack={true}/>
                    </div>
                ))}
                <div className="flex gap-8 w-full">
                                    <SquareBtn
  handleClick={()=>setIsOpen(false)}
  text="Nu am nevoie de nimic"
  isDark={true}
/>

                 <SquareBtn
  handleClick={addMainProductToCart}
  text="Adaugă în coș"
  isDark={false}
/>
                </div>
            </div>
        )}
      </PopUp>
    </div>
  )
}

export default RecomendedPopUp
