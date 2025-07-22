import { useState } from "react"
import { BaseURL } from "../../api/strapi"
import LinkArrow from "../../assets/icons/link-arrow.svg?react"
import FullSizeIcon from "../../assets/icons/fullsize-icon.svg?react"
import CloseIcon from "../../assets/icons/close-x.svg?react"



type ProductHeroCarouselProps={
    images:[{
        url:string
    }]
}

const ProductHeroCarousel = ({ images }: ProductHeroCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const [isFullSize, setIsFullSize] = useState(false)

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const toggleFullSize = () => {
    setIsFullSize((prev) => !prev)
  }

  return (
    <>
      <div className="relative w-full h-[600px] bg-white border-1 rounded-xl shadow-sm border-[rgba(var(--color-gray-rgb),0.26)] overflow-hidden">
        <img
          src={BaseURL + images[current].url}
          alt={`Slide ${current + 1}`}
          className="w-full h-full py-15 object-contain transition-all duration-700"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--color-accent)] opacity-70 p-3 rounded-full z-20 cursor-pointer px-4 hover:opacity-100 transition"
        >
          <LinkArrow className="rotate-180 w-auto h-[15px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[var(--color-accent)] opacity-70 p-3 rounded-full z-20 cursor-pointer hover:opacity-100 transition"
        >
          <LinkArrow className="w-[15px] h-[15px]" />
        </button>

        <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 cursor-pointer rounded-full transition ${
                current === index
                  ? "bg-[var(--color-accent)]"
                  : "bg-white opacity-70"
              }`}
            />
          ))}
        </div>

        <button
          onClick={toggleFullSize}
          className="absolute bottom-5 right-5 opacity-70 p-3 rounded-full z-20 cursor-pointer hover:opacity-100 transition flex items-center justify-center"
        >
                        <FullSizeIcon className="h-[20px] w-auto" />
        </button>
      </div>

      {isFullSize && (
        <>
          <div
            className="fixed inset-0 bg-[var(--color-black)] opacity-90 z-[9998]"
            onClick={toggleFullSize}
          />

          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999]">
            <img
              src={BaseURL + images[current].url}
              alt={`Slide ${current + 1}`}
              className="max-w-full max-h-full object-contain z-10"
            />

            <button
              onClick={toggleFullSize}
              className="absolute top-5 right-5 text-white opacity-70 p-3 rounded-full z-20 cursor-pointer hover:opacity-100 transition"
            >
              <CloseIcon className="h-[30px] w-auto" />
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default ProductHeroCarousel