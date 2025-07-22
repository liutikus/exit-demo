import { useState } from "react"
import CheckIcon from "../../assets/icons/check-icon.svg?react"

type ColorOptionsProps ={
     colors: [{
        hex_code: string,
        name:string
        id:number
    }]
}

const ColorOptions = ({colors}: ColorOptionsProps) => {

    const [selectedId, setSelectedId] = useState(colors[0].id)

    const handleClick= (colorId:number)=>{
        setSelectedId(colorId)
    }

  return (
    <div className="bg-[#FAFAFA] p-6 mt-5 rounded-xl border-[rgba(var(--color-gray-rgb),0.13)] border-1">
      <h4 className="text-lg font-bold">Finisaj. <span className="opacity-50">Alege-l pe cel preferat.</span></h4>
      <div className="flex items-center gap-2 py-4">
        {colors.map(({hex_code,id})=>(
            <div
            key={id}
            onClick={()=>handleClick(id)}
            className={`p-4 rounded-full relative cursor-pointer text-[var(--color-accent)] border-[var(--color-accent)] ${selectedId === id ? "border-1" : "border-0"}`}
            style={{backgroundColor: hex_code}}
            >
                <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    {selectedId === id && (<CheckIcon className="h-[10px] w-auto"/>)}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ColorOptions
