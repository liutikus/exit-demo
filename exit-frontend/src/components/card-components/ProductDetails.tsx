import { useState } from "react"

type ProductDetailsProps = {
    title: string,
    detailsInfo: [{
        name: string,
        value:string
    }]
}

const ProductDetails = ({title, detailsInfo} : ProductDetailsProps) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#f5f5f5] rounded-lg px-5 my-4 ">
        <div className={`${isOpen ? "border-b-1" : "border-b-0"}  border-[rgba(var(--color-gray-rgb),0.13)] py-5 flex w-full items-center justify-between`}>
      <h2 className="text-xl font-bold">{title}</h2>
     <button
            onClick={() => setIsOpen(!isOpen)}
            className={`border-1 rounded-md text-xl w-[35px] pb-[5px] transition-all ease-in-out duration-300 cursor-pointer font-bold border-[var(--color-accent)]
              hover:bg-[var(--color-accent)]`}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div
        className={`overflow-hidden grid grid-cols-4 gap-y-12  transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
        }`}
      >
       {detailsInfo.map(({name, value}, index)=>(
         <div
            key={index}
            >
                <h4 className="font-bold">{name}</h4>
                <p>{value}</p>
            </div>
       ))}
      </div>
    </div>
  )
}

export default ProductDetails
