import { useState } from "react"
import ArrowIcon from "../../assets/icons/link-arrow.svg?react"

type Item = {
  documentId: string
  name: string
}

type CalculatorCardProps = {
  items: Item[] | null
  handleSelect: (selectedItem: Item) => void
  selectedItem: Item | null
  title: string
}

const CalculatorCard = ({ items, selectedItem, handleSelect, title }: CalculatorCardProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleClick = (item: Item) => {
    handleSelect(item)
    setIsSubMenuOpen(false)
  }

  return (
    <div className="bg-black/30 px-4 rounded-xl my-4">
      <div className="flex items-center justify-between">
        <div
          className="flex gap-2 items-center cursor-pointer w-full"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <p className="text-lg">{selectedItem ? selectedItem.name : title}</p>
        </div>
        <div>
          <button
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="font-bold text-2xl p-4 cursor-pointer"
          >
            <ArrowIcon
              className={`transform transition-transform ease-in-out w-auto text-[var(--color-accent)] h-4 duration-300 ${
                isSubMenuOpen ? "rotate-270" : "rotate-90"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden py-1 transition-all duration-300 ease-in-out transform ${
          isSubMenuOpen
            ? "opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        {items?.map((item) => (
          <button
            key={item.documentId}
            onClick={() => handleClick(item)}
            className="block p-2 w-full text-start text-white/80 hover:text-white/100 cursor-pointer transition-all ease-in-out duration-300 border-b-2 border-[var(--color-gray)]/20"
          >
            {item.name}
          </button>
        ))}

        <button
          onClick={() => handleClick({ name: "Other", documentId: "other" })}
          className="block p-2 w-full text-start text-white/80 hover:text-white/100 cursor-pointer transition-all ease-in-out duration-300 border-b-2 border-[var(--color-gray)]/20"
        >
          Other
        </button>
      </div>
    </div>
  )
}

export default CalculatorCard
