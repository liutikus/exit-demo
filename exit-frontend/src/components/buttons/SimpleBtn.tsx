import { useState } from "react"

type SimpleBtnProps = {
    children:React.ReactNode,
    isSquare: boolean,
}

const SimpleBtn = ({children, isSquare}: SimpleBtnProps) => {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = ()=>{
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
        }, 200);
    } 

  return (
    <div>
       <button
       onClick={handleClick} 
       className={`border-1 cursor-pointer border-[rgba(var(--color-gray-rgb),0.26)] rounded-lg
        ${isSquare ? "p-4" : "py-3 px-5"}
       ${isClicked ? "shadow-xs" : "shadow-sm"}
        `}>{children}</button>
    </div>
  )
}

export default SimpleBtn
