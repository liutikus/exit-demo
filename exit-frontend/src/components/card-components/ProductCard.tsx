import { Link } from "react-router"
import { BaseURL } from "../../api/strapi"
import { formatPrice } from "../../data/formatNumbers"
import type { Product } from "../../types/types"
import RoundedBtn from "../buttons/RoundedBtn"
import SpecialOfferIcons from "./SpecialOfferIcons"
import { useCart } from "../../hooks/useCart"

type ProductCardProps = {
    product: Product,
    isDark:boolean
}

const ProductCard = ({ product, isDark }: ProductCardProps) => {

  const {addToCart} = useCart()


    return (

       <div className="relative flex flex-col w-[270px] shadow-sm dark:bg-black bg-white h-[390px]  border-1 px-4 pt-6 pb-4 rounded-xl border-[rgba(var(--color-gray-rgb),0.26)]">
 
  <SpecialOfferIcons
  isForCard={true}
    product={product}
  />

 
  <div className="flex justify-center items-center h-[200px]">
    <Link
    to={`/product/${product.documentId}`}
    >
    <img
      className="max-h-full w-auto object-contain"
      src={BaseURL + product.mainImage.url}
      alt={product.title}
    />
    </Link>
  </div>


  <div className="flex flex-wrap gap-2 pt-4 pb-2">
    {product.colors.slice(0, 5).map(({ hex_code }, index) => (
      <div key={index} className="flex items-center">
        <div
          className="h-[12px] w-[12px] rounded-full border-1 border-[var(--color-light-black)]"
          style={{ backgroundColor: hex_code }}
        />
        {index === 4 && product.colors.length > 5 && (
          <div className="text-xs bg-[var(--color-light-black)] px-1 ml-1 rounded-full">
            +{product.colors.length - 5}
          </div>
        )}
      </div>
    ))}
  </div>

  
  <div className="flex flex-col justify-end flex-grow">
    <Link
    to={`/product/${product.id}`}
    >
    <h4 className="font-bold text-lg leading-tight line-clamp-2">{product.title}</h4>
    
    </Link>
    <h4 className="text-sm mt-1">Începând cu {formatPrice(product.start_price)} MDL</h4>
    <div className="mt-3">
      <RoundedBtn text="Adaugă în coș" handleClick={()=>addToCart({
        id:product.id,
        product,
        quantity:1
      })} isTextBlack={!isDark} />
    </div>
  </div>
</div>

    )
}

export default ProductCard
