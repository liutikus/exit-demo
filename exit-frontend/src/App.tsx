import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ShopPage from "./pages/ShopPage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<ShopPage/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>



     {/* 404 fallback route */}
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  )
}

export default App
