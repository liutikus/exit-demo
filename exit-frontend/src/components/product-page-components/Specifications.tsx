import { useState } from "react"
import type { Product } from "../../types/types"
import ProductDetails from "../card-components/ProductDetails"
import PaddingContainer from "../PaddingContainer"

type SpecificationsProps = {
    product: Product
}

const Specifications = ({product} : SpecificationsProps) => {

    const [productDetails] = useState([{
        name: "Brand",
        value:product.brand.name
    },{
        name:"Tip",
        value:product.product_type.name
    },{
        name:"Memorie Internă",
        value:product.memory_options.map(option=>option.memory_value).join(" / ")
    }].concat(product.product_details[0].details_info).slice(0,12))



  return (
    <div className="bg-[#fafafa] py-20">
        <PaddingContainer>

      <h2 className="font-bold text-4xl">Specificații</h2>
      <div className="bg-[#f5f5f5] rounded-lg p-5 my-4 grid grid-cols-4 gap-y-12">
        {productDetails.map(({name, value},index)=>(
            <div
            key={index}
            >
                <h4 className="font-bold">{name}</h4>
                <p>{value}</p>
            </div>
        ))}

      </div>
      {product.product_details.map(({title, details_info},index)=>(
        <div key={index}>
            <ProductDetails title={title} detailsInfo={details_info}/>
        </div>
      ))}
        </PaddingContainer>
    </div>
  )
}

export default Specifications
