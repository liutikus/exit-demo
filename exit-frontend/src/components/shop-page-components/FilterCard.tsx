import { useState } from "react"

type FilterCardProps = {
hasSubCard:boolean,
children: React.ReactNode,
label:string
}

const FilterCard = ({ children, hasSubCard, label} : FilterCardProps) => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
    <div className="py-2 text-[var(--color-black)] text-sm border-t-1 border-[rgba(var(--color-gray-rgb),0.26)]">
      <div className="flex items-center justify-between">
    <h1 className="font-bold text-sm">{label}</h1>
    {hasSubCard? (
     <button 
      className={`border-1 rounded-md text-xl w-[35px] pb-[5px] transition-all ease-in-out duration-300 cursor-pointer  font-bold border-[var(--color-accent)]
      hover:bg-[var(--color-accent)]
     `}
      onClick={()=>setIsOpen(!isOpen)}
      >
        {isOpen ? "-":"+"}
        </button>

    ) : (null)}
      </div>
       <div  className={`overflow-hidden py-1 transition-all duration-500 ease-in-out transform ${
          isOpen || !hasSubCard ? " opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}>
            {children}
        </div>
    </div>
    </div>
  )
}

export default FilterCard
