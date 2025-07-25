import { useState } from "react"
import TruckIcon from "../../assets/icons/truck-icon.svg?react"
import { freeDeliveryValue } from "../../data/data"
import { useCart } from "../../hooks/useCart"
import CheckIcon from "../../assets/icons/check-icon.svg?react"
import SquareBtn from "../buttons/SquareBtn"

const FinalPrice = () => {

    const {total} = useCart()
    const [isChecked, setIsChecked] = useState(false)

    const checkFreeDelivery = ()=>{
        if(total>=freeDeliveryValue){
            return "Ai livrarea gratuita!"
        } else {
            return `Adauga produse in coș in valoare de ${(freeDeliveryValue - total).toLocaleString()} lei si ai livrarea gratuita!`
        }
    }

  return (
    <div className=" felx flex-col">
      <div className="w-full border-1 border-[var(--color-accent)] bg-white rounded-xl p-6">
        <div className="flex items-center gap-4 ">
            <TruckIcon className="h-5 w-auto"/>
            <p>{checkFreeDelivery()}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl my-4 px-3 py-6 flex flex-col gap-y-6">
            <h2 className="text-3xl font-bold">Total {total.toLocaleString()} Lei</h2>
            <div className="flex">
                <label className="inline-flex items-baseline gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="peer hidden"
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
  />
  <div className="w-5 h-4 rounded border-2 border-[var(--color-black)] flex items-center justify-center">
 <div className={` text-[var(--color-accent)] ${isChecked ? "opacity-100" : "opacity-0"}`}>
    <CheckIcon className="h-2 w-auto"/>
    </div>
  </div>
  <span className="">Am citit si sunt de acord cu termenii si conditiile de vanzare si cu politica de confidentialitate.</span>
</label>
            </div>
      <div>
        <SquareBtn isDark={false} text="Finalizeaza Comanda"/>
      </div>
      </div>
    </div>
  )
}

export default FinalPrice
