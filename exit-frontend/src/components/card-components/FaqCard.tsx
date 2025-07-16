import { type FC, type SVGProps } from "react"

type FaqCardProps = {
    question:string,
    answer:string,
    Icon: FC<SVGProps<SVGSVGElement>>,
    isOpen:boolean,
    handleClick: ()=>void
}

const FaqCard = ({question,answer, Icon, isOpen, handleClick} : FaqCardProps) => {



  return (
    <div className=" border-b-1  border-[rgba(var(--color-gray-rgb),0.26)]">
        <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
            <Icon className="w-auto h-[12px]"/>
            <p>{question}</p>
        </div>
        <div>
            <button 
            onClick={handleClick}
            className="font-bold text-2xl p-4 cursor-pointer">{isOpen? "-" : "+"}</button>

        </div>

        </div>
        <div  className={`overflow-hidden py-1 transition-all duration-500 ease-in-out transform ${
          isOpen ? " opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}>
            {answer}
        </div>
    </div>
  )
}

export default FaqCard
