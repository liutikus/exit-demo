import Footer from "../components/Footer"
import NavBar from "../components/nav-components/NavBar"
import MainProductSection from "../components/product-page-components/MainProductSection"

const ProductPage = () => {
  return (
    <div>
      <NavBar isDark={false}/>
      <MainProductSection/>
      <Footer/>
    </div>
  )
}

export default ProductPage
