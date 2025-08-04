import { useState } from "react"
import type { MemoryOption } from "../../types/types"

type MemoryOptionsProps = {
        memoryOptions:[{
        price:number,
        memory_value:string,
      
    }]
    setSelectedMemory: (memoryOption:MemoryOption)=>void
}

const MemoryOptions = ({memoryOptions, setSelectedMemory}: MemoryOptionsProps) => {

    const [selectedName, setSelectedName] = useState(
        memoryOptions.sort((a,b)=>a.price - b.price)[0].memory_value )

    const handleClick = (memoryOption : MemoryOption)=>{
        setSelectedName(memoryOption.memory_value)
        setSelectedMemory(memoryOption)
    }

  return (
   <div className="bg-[#FAFAFA] p-6 mt-10 rounded-xl border-[rgba(var(--color-gray-rgb),0.13)] border-1">
        <h4 className="font-bold text-lg">Stocare.<span className="opacity-50"> Alege capacitatea potrivită pentru tine.</span></h4>
            {memoryOptions.sort((a,b)=>a.price - b.price)
                    .map((memoryOption,index)=>(
                <div
                key={index}
                onClick={()=>handleClick(memoryOption)}
                className={`${selectedName === memoryOption.memory_value ? "border-[var(--color-accent)]" : "border-white"} border-1 cursor-pointer  bg-white flex items-center justify-between p-5 my-4 font-semibold rounded-md `}
                >
                <p>{memoryOption.memory_value}</p>
                <p>De La {memoryOption.price.toLocaleString()} Lei</p>
                </div>
            ))}
      </div>
  )
}

export default MemoryOptions
