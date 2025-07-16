
type RoundedBtnProps ={
    text:string,
    isTextBlack:boolean,
}

const RoundedBtn = ({text, isTextBlack}: RoundedBtnProps) => {
  return (
    <div>
      <button className={` px-6 sm:px-8 md:px-12 
    py-2 
    text-sm sm:text-base md:text-lg 
    border border-[var(--color-accent)] 
    rounded-full 
    cursor-pointer
    transition-all ease-in-out duration-200
    hover:bg-[var(--color-accent)]
    max-w-full
    inline-block
    text-center
      ${isTextBlack ? "text-[var(--color-black)]" : "text-white"}}
     `}>
      {text}</button>
    </div>
  )
}

export default RoundedBtn
