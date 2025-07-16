import Footer from "../components/Footer"
import NavBar from "../components/nav-components/NavBar"
import ShopHero from "../components/shop-page-components/ShopHero"
import ShopSection from "../components/shop-page-components/ShopSection"

const ShopPage = () => {
  return (
    <div>
      <NavBar isDark={false}/>
      <ShopHero/>
      <ShopSection/>
      <Footer/>
    </div>
  )
}

export default ShopPage
