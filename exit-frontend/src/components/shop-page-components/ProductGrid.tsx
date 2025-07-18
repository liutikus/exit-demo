import type { Product, ProductsData } from "../../types/types"
import ProductCard from "../card-components/ProductCard"
import PaginationBtns from "./PaginationBtns"

type ProductGridProps = {
    products: Product[] | null
       productsData: ProductsData | null,
        currentPage: number,
        handlePageChange: (page:number)=>void
}

const ProductGrid = ({products, productsData, currentPage, handlePageChange}: ProductGridProps) => {
  return (
    <div className="py-10 relative">
                    <div
                     className="grid grid-cols-[repeat(auto-fit,_minmax(245px,_1fr))] gap-6"
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
                    <PaginationBtns 
                productsData={productsData}
                 currentPage={currentPage} 
                 handlePageChange={handlePageChange}/>
                </div>
  )
}

export default ProductGrid
