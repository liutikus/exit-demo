import type { Product } from "../../types/types"
import ProductCard from "../card-components/ProductCard"

type ProductGridProps = {
    products: Product[] | null
}

const ProductGrid = ({products}: ProductGridProps) => {
  return (
    <div className="py-10">
                    <div
                    //  className="flex flex-wrap gap-4 justify-center sm:justify-start pb-6"
                     className="grid grid-cols-1 place-items-center"
                     >
                        {products?.map((product)=>(
                            <div
                            key={product.id}
                            >
                            <ProductCard product={product} isDark={false}/>
                            </div>
                        ))}{products?.map((product)=>(
                            <div
                            key={product.id}
                            >
                            <ProductCard product={product} isDark={false}/>
                            </div>
                        ))}
                    </div>
                </div>
  )
}

export default ProductGrid
