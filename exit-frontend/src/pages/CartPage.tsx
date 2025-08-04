import CartDetails from "../components/cart-page-components/CartDetails"
import CartHero from "../components/cart-page-components/CartHero"
import EmptyCart from "../components/cart-page-components/EmptyCart"
import Footer from "../components/Footer"
import NavBar from "../components/nav-components/NavBar"
import PaddingContainer from "../components/PaddingContainer"
import { useCart } from "../hooks/useCart"

const CartPage = () => {

  const {cartItems} = useCart();
  console.log(cartItems)

  return (
    <div className="text-[var(--color-black)] bg-[var(--color-bg-white)]">
      <NavBar isDark={false}/>
      <PaddingContainer>
      <CartHero/>
      {cartItems[0]? (
        <CartDetails/>
      ) :(
        <EmptyCart/>
      )}

      </PaddingContainer>
      <Footer/>
    </div>
  )
}

export default CartPage
