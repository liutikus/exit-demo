import type { Product } from "../../types/types"
import BestForYouCard from "../card-components/BestForYouCard"

type BestForYouProductsProps = {
    products: Product[] | null
}

const BestForYouProducts = ({products}: BestForYouProductsProps) => {
  return (
    <div className="py-20">
        <h4 className="text-center text-4xl font-bold">Cel mai bun pentru tine</h4>
        <div className="flex justify-around">
            {products?.map((product,index)=>(
                <div
                key={index}
                >
                    <BestForYouCard product={product}/>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default BestForYouProducts
