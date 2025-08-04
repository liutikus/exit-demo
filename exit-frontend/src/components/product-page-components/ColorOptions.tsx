import { useState } from "react"
import CheckIcon from "../../assets/icons/check-icon.svg?react"
import type { Color } from "../../types/types"

type ColorOptionsProps ={
     colors: [{
        hex_code: string,
        name:string
        id:number
    }],
    setSelectedColor:(color: Color)=>void
}

const ColorOptions = ({colors, setSelectedColor}: ColorOptionsProps) => {

    const [selectedId, setSelectedId] = useState(colors[0].id)

    const handleClick= (color:Color)=>{
        setSelectedId(color.id)
        setSelectedColor(color)
    }

  return (
    <div className="bg-[#FAFAFA] p-6 mt-5 rounded-xl border-[rgba(var(--color-gray-rgb),0.13)] border-1">
      <h4 className="text-lg font-bold">Finisaj. <span className="opacity-50">Alege-l pe cel preferat.</span></h4>
      <div className="flex items-center gap-2 py-4">
        {colors.map((color)=>(
            <div
            key={color.id}
            onClick={()=>handleClick(color)}
            className={`p-4 rounded-full relative cursor-pointer text-[var(--color-accent)] border-[var(--color-accent)] ${selectedId === color.id ? "border-1" : "border-0"}`}
            style={{backgroundColor: color.hex_code}}
            >
                <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    {selectedId === color.id && (<CheckIcon className="h-[10px] w-auto"/>)}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ColorOptions
