import { whyEBronique } from "../../data/data"
import EBroniqueWhyImg from "/img/bg/e-bronique-why.png"

const EBroniqueWhyUs = () => {
  return (
   <div className="text-white py-16">
  <h2 className="text-4xl font-bold mb-8">De ce să alegi peliculele noastre?</h2>

  <div className="flex gap-8">
    <div className="grid grid-cols-2 gap-6 flex-1">
      {whyEBronique.map(({ title, description }, index) => (
        <div
          key={index}
          className="rounded-xl bg-[rgba(var(--color-gray-rgb),0.2)] p-8 relative"
        >
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="opacity-80">{description}.</p>
          <span className="absolute bottom-0 right-0 text-5xl font-bold text-black">
            0{index + 1}
          </span>
        </div>
      ))}
    </div>

    <div className="relative" style={{ width: "calc(35%)" }}>
      <div className="bg-[rgba(var(--color-gray-rgb),0.2)] rounded-xl h-full relative overflow-visible">
        <img
          src={EBroniqueWhyImg}
          alt="e-bronique"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[120%] object-contain"
        />
      </div>
    </div>
  </div>
</div>
  )
}

export default EBroniqueWhyUs
