
type ColoredBtnProps= {
    text:string
    isTextBold: boolean
}

const ColoredBtn = ({text, isTextBold} : ColoredBtnProps) => {
  return (
    <div>
        <button
  className={`
    px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 
    py-2 
    text-sm sm:text-base md:text-md xl:text-lg
    font-bold
    bg-[var(--color-accent)] 
    border border-[var(--color-accent)] 
    rounded-full 
    text-[var(--color-black)]
    cursor-pointer
    transition-all ease-in-out duration-200
    hover:bg-[var(--color-accent)]
    max-w-full
    inline-block
    text-center
  ${isTextBold ? "font-bold" : "font-normal"}

  `}
>
  {text}
</button>


    </div>
  )
}

export default ColoredBtn
