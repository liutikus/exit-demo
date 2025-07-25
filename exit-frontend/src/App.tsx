import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ShopPage from "./pages/ShopPage"
import ProductPage from "./pages/ProductPage"
import TradeInPage from "./pages/TradeInPage"
import AboutUsPage from "./pages/AboutUsPage"
import CartPage from "./pages/CartPage"

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<ShopPage/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    <Route path="/trade-in" element={<TradeInPage/>}/>
    <Route path="/about-us" element={<AboutUsPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>






     {/* 404 fallback route */}
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  )
}

export default App
