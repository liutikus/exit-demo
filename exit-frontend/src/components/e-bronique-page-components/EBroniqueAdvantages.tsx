import { useState } from "react"
import { screenProtectorAdvantages } from "../../data/data"
import ColoredBtn from "../buttons/ColoredBtn"

const EBroniqueAdvantages = () => {

    const [hoveredId,setHoveredId] = useState<number | null>(null)

  return (
    <div className="text-white py-10">
        <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Avantajele utilizării peliculei bronate</h2>
            <ColoredBtn text="Vezi tipurile de pelicule" isTextBold={false}/>
        </div>
        <div className="grid grid-cols-3 gap-6 py-5">
            {screenProtectorAdvantages.map(({title,description, id})=>(
                <div
                key={id}
                className={`border-1 rounded-xl  p-8 transition-all ease-in-out duration-300
                     ${hoveredId === id ? 
                     "bg-[rgba(var(--color-accent-rgb),0.16)] border-[rgba(var(--color-accent-rgb),1)]" : "bg-[rgba(var(--color-accent-rgb),0)] border-[rgba(var(--color-gray-rgb),0.26)]"}`}
                onMouseEnter={()=>setHoveredId(id)}
                onMouseLeave={()=>setHoveredId(null)}
                >
                    <h4 className="text-2xl pb-4 font-bold">{title}</h4>
                    <p className="opacity-90">{description}</p>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default EBroniqueAdvantages
