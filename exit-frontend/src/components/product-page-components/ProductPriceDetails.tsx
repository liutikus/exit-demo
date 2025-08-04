import type { Color, MemoryOption, Product, VideoData } from "../../types/types"
import SpecialOfferIcons from "../card-components/SpecialOfferIcons"
import CompareIcon from "../../assets/icons/compare-icon.svg?react"
import MemoryOptions from "./MemoryOptions"
import ColorOptions from "./ColorOptions"
import VideoProduct from "./VideoProduct"
import FinalPrice from "./FinalPrice"
import { useMemo, useState } from "react"

type ProductPriceDetailsProps ={
    product: Product
    video:VideoData
}

const ProductPriceDetails = ({product, video}: ProductPriceDetailsProps) => {

  const [selectedColor, setSelectedColor] = useState<Color | null>(product.colors[0]? product.colors[0] : null )
  const [selectedMemory,setSelectedMemory] = useState<MemoryOption | null>(product.memory_options? 
    product.memory_options.sort((a,b)=>a.price - b.price)[0] : null)
    const finalPrice = useMemo(() => {
  const basePrice = selectedMemory ? selectedMemory.price : product.start_price;

  if (product.discountPercentage) {
    return basePrice - (basePrice * product.discountPercentage) / 100;
  }

  return basePrice;
}, [selectedMemory, product.start_price, product.discountPercentage]);
 

  return (
    <div className="w-full text-[var(--color-black)]">
            <h4 className="text-sm pb-2">{product.brand.name}</h4>
      <div className="md:flex items-baseline-last justify-between border-[rgba(var(--color-gray-rgb),0.13)] border-b-[2px] pb-3">
            <div className="flex items-center gap-2 pr-4">
            <h2 className="text-xl font-bold">{product.title}</h2>
                <SpecialOfferIcons product={product} isForCard={false}/>
            </div>
            <button className="flex items-center cursor-pointer gap-0.5">
                <CompareIcon className="h-[15px] w-auto"/>
                <p >Add to compare</p>
            </button>

      </div>
      {product.memory_options[0] && (
        <MemoryOptions 
        setSelectedMemory={(memoryOption)=>setSelectedMemory(memoryOption)}
        memoryOptions={product.memory_options}/>
      )}
      {product.colors[0] && (
        <ColorOptions 
        colors={product.colors}
        setSelectedColor = {(color:Color)=>setSelectedColor(color)}
        />
      )}
      {
        video && (
          <VideoProduct video={video}/>
        )
      }
        <FinalPrice finalPrice={finalPrice} product={product} selectedMemory={selectedMemory} selectedColor={selectedColor}/>
    </div>
  )
}

export default ProductPriceDetails
