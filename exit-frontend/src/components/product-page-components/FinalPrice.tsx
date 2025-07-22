import type { Product } from "../../types/types"
import SquareBtn from "../buttons/SquareBtn"
import CheckIcon from "../../assets/icons/check-icon.svg?react"
import { useState } from "react"

type FinalPriceProps = {
    product: Product
}

const FinalPrice = ({product} : FinalPriceProps) => {

    const [isNowPay, setIsNowPay] = useState(true)

  return (
    <div className="pt-10">
        <div className="flex items-center gap-4 py-4">
            <div 
            onClick={()=>setIsNowPay(!isNowPay)}
            className={`${!isNowPay ? "border-[rgba(var(--color-gray-rgb),0.13)]" : "border-[var(--color-accent)]"} bg-white p-7 w-full border-1 rounded-lg cursor-pointer `}>
                    <h2 className="font-bold text-lg pb-2 ">Prețul final:</h2>
                    <p className="flex gap-2 text-lg">{product.start_price.toLocaleString()}  Lei
                        <s className="opacity-40">{product.start_price.toLocaleString()} Lei 
                            </s></p>
            </div>
            <div 
            onClick={()=>setIsNowPay(!isNowPay)}
            className={`${isNowPay ? "border-[rgba(var(--color-gray-rgb),0.13)]" : "border-[var(--color-accent)]"} bg-white p-7 w-full border-1 rounded-lg cursor-pointer `}>
                    <h2 className="font-bold text-lg pb-2 ">Rate lunare de la:</h2>
                    <p className="flex gap-2 text-lg opacity-40">{product.start_price.toLocaleString()}  Lei
                        <span className="underline cursor-pointer"> Vezi Detalii</span></p>
            </div>

        </div>
        <div className="bg-white w-full border-[rgba(var(--color-gray-rgb),0.13)] border-1 rounded-lg p-5">
                <h4 className="flex items-center pb-3 gap-2"><span className="text-[var(--color-accent)]"><CheckIcon className="h-[12px] w-auto"/></span>Livrare rapidă în oraşul Chişinău şi în orice colţ al ţării.</h4>
                <p className="opacity-80 text-sm">Usually ready in 24 hours <span className="underline cursor-pointer">View store information</span></p>
        </div>
        <div className="flex flex-col space-y-2 pt-4">
      <SquareBtn text={"Adaugă în coș"} isDark={true}/>
      <SquareBtn text={"Cumpără acum"} isDark={false}/>

        </div>
    </div>
  )
}

export default FinalPrice
