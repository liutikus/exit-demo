import { tradeSteps } from "../../data/data"
import ColoredBtn from "../buttons/ColoredBtn"
import PaddingContainer from "../PaddingContainer"

const TradeStepsGrid = () => {
  return (
    <div className="py-10">
        <PaddingContainer>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
  {tradeSteps.map(({ stepNumber, bgColor, title, description }, index) => (
    <div
      key={index}
      className={`flex flex-col w-full ${bgColor} text-center p-10 border-1 rounded-xl border-[rgba(var(--color-gray-rgb),0.26)]`}
    >
      <div className="flex flex-col gap-y-4 items-center flex-grow">
        <p className="w-10 h-10 text-lg font-bold flex items-center justify-center border-1 rounded-full border-[var(--color-accent)]">
          {stepNumber}
        </p>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="opacity-40">{description}</p>
      </div>

      <div className="mt-auto pt-15">
        <ColoredBtn text={"Adaugă dispozitivul"} isTextBold={true} />
      </div>
    </div>
  ))}
</div>

        </PaddingContainer>
      
    </div>
  )
}

export default TradeStepsGrid
