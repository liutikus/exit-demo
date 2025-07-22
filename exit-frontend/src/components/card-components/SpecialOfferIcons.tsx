import SaleIcon from "../../assets/icons/sale-icon.svg?react"
import UnpackedIcon from "../../assets/icons/unpacked-icon.svg?react"
import TopSoldIcon from "../../assets/icons/top-sold-icon.svg?react"
import { useState } from "react"
import type { Product } from "../../types/types"

type SpecialOfferIconsProps = {
  product: Product
  isForCard: boolean
}

const SpecialOfferIcons = ({ product, isForCard }: SpecialOfferIconsProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { is_on_sale, is_new, is_top_sold, is_unpacked, discountPercentage } = product

  // Use this hover value throughout
  const hoverState = isForCard ? isHovered : true

  // Shared props only if isForCard is true
  const hoverHandlers = isForCard
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }
    : {}

  const RenderIcon = () => {
    if (is_on_sale) {
      return (
        <div
          className="text-white bg-[var(--color-red)] h-auto w-full p-2 rounded-lg cursor-pointer"
          {...hoverHandlers}
        >
          <div
            className={`font-bold text-sm flex items-center transition-all ease-in-out duration-300 justify-around ${
              hoverState ? "px-3 scale-100" : "px-0"
            }`}
          >
            -{discountPercentage}%{" "}
            <SaleIcon
              className={`transition-all ease-in-out duration-200 w-auto ${
                hoverState
                  ? "scale-100 pl-3 opacity-100 h-5"
                  : "scale-0 opacity-0 p-0 m-0 h-0"
              }`}
            />
          </div>
        </div>
      )
    }

    if (is_top_sold) {
      return (
        <div
          className="text-[var(--color-black)] bg-[var(--color-gold)] h-auto w-full p-2 rounded-lg cursor-pointer"
          {...hoverHandlers}
        >
          <div
            className={`font-bold text-sm flex items-center transition-all ease-in-out duration-300 justify-around ${
              hoverState ? "px-3 scale-100" : "px-0"
            }`}
          >
            <p
              className={`transition-all ease-in-out duration-300 ${
                hoverState
                  ? "text-md pr-3 w-25 opacity-100 h-5"
                  : "scale-0 text-[0px] opacity-0 pr-0 m-0 w-0 h-0"
              }`}
            >
              Top Produs
            </p>
            <TopSoldIcon className="h-5 w-auto" />
          </div>
        </div>
      )
    }

    if (is_new) {
      return (
        <div
          className="text-[var(--color-black)] bg-[var(--color-accent)] h-auto w-full p-2 rounded-lg cursor-pointer"
          {...hoverHandlers}
        >
          <div
            className={`font-bold text-sm flex items-center transition-all ease-in-out duration-300 justify-around ${
              hoverState ? "px-4 scale-100" : "px-1"
            }`}
          >
            <p>New</p>
          </div>
        </div>
      )
    }

    if (is_unpacked) {
      return (
        <div
          className="text-[var(--color-white)] bg-[var(--color-purple)] h-auto w-full p-2 rounded-lg cursor-pointer"
          {...hoverHandlers}
        >
          <div
            className={`font-bold text-sm flex items-center transition-all ease-in-out duration-300 justify-around ${
              hoverState ? "px-3 scale-100" : "px-0"
            }`}
          >
            <p
              className={`transition-all ease-in-out duration-300 ${
                hoverState
                  ? "text-md pr-3 w-25 opacity-100 h-5"
                  : "scale-0 text-[0px] opacity-0 pl-0 m-0 w-0 h-0"
              }`}
            >
              Desigilat
            </p>
            <UnpackedIcon className="h-5 w-auto" />
          </div>
        </div>
      )
    }

    return null
  }

  return <div className={`${isForCard ? "absolute top-2 left-2" : ""}`}>{RenderIcon()}</div>
}

export default SpecialOfferIcons
