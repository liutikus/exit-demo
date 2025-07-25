import { useCart } from "../../hooks/useCart"
import CartDetailsCard from "../card-components/CartDetailsCard"
import FinalPrice from "./FinalPrice"


const CartDetails = () => {
  const { cartItems } = useCart()

  return (
    <div className="flex justify-between gap-8 pb-15">
    <div className="flex flex-col bg-white rounded-xl shadow-sm w-[80%]">
       
      <div className="grid grid-cols-5 text-xl font-semibold py-5 px-7 border-[rgba(var(--color-gray-rgb),0.1)] border-b-2">
        <p className="col-span-2">Produs</p>
        <p>Pret</p>
        <p>Cantitate</p>
        <p>Total</p>
      </div>

      {cartItems.map(({ id, product, quantity }) => (
       <div key={id} className="grid grid-cols-5 items-center px-7 py-4 border-b-2 border-[rgba(var(--color-gray-rgb),0.1)]">
        <CartDetailsCard product={product} id={id} quantity={quantity}/>
        </div>
      )) }
       
       
    </div>
        <FinalPrice/>
     

    </div>
  )
}

export default CartDetails
