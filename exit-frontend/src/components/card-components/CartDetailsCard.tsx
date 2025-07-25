import { BaseURL } from "../../api/strapi"
import { useCart } from "../../hooks/useCart"
import type { CartItem } from "../../types/cart"
import MinusIcon from "../../assets/icons/minus-icon.svg?react"
import PlusIcon from "../../assets/icons/plus-icon.svg?react"




const CartDetailsCard = ({id, product, quantity}: CartItem) => {

    const {removeFromCart, updateQuantity} = useCart()

  return (<>
      <div className="col-span-2 flex items-center gap-4">
    <div className="w-20 h-20 overflow-hidden">
      <img
        src={BaseURL + product.mainImage.url}
        alt={product.title}
        className="object-cover w-full h-full rounded"
      />
    </div>
    <div>
      <h4 className="text-lg font-semibold truncate max-w-[200px]">{product.title}</h4>
      <button
      onClick={()=>removeFromCart(id)}
       className="px-3 py-1 mt-2 cursor-pointer rounded-md text-[var(--color-red)]  bg-[var(--color-bg-white)] hover:bg-red-50 transition">
        Șterge
      </button>
    </div>
  </div>

  <div className="text-lg">{product.start_price.toLocaleString()} Lei</div>

  <div className="text-lg flex items-center  gap-2">
    <button 
    className="w-10 h-10  flex items-center justify-center bg-white cursor-pointer hover:bg-[var(--color-bg-white)] border-2 rounded-md border-[rgba(var(--color-gray-rgb),0.1)] "
    onClick={()=>updateQuantity(id, quantity-1)}
    >
        <MinusIcon className="h-auto w-2.5"/>
    </button>
   <input
  type="number"
    className="appearance-none focus:outline-none w-10 h-10 text-center bg-white border-2 rounded-md border-[rgba(var(--color-gray-rgb),0.1)] 
    [&::-webkit-outer-spin-button]:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none 
    [-moz-appearance:textfield]"
  value={quantity}
  onChange={(e) => updateQuantity(id, Number(e.target.value))}
/>
    <button
    className="w-10 h-10  flex items-center justify-center bg-white cursor-pointer hover:bg-[var(--color-bg-white)] border-2 rounded-md border-[rgba(var(--color-gray-rgb),0.1)] "
    onClick={()=>updateQuantity(id, quantity +1)}

    >
        <PlusIcon className="h-2.5 w-auto"/>
    </button>
  </div>

  <div className="text-lg">{(product.start_price * quantity).toLocaleString()} Lei</div>
  </>)
}

export default CartDetailsCard
